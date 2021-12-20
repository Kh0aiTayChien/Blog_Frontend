import {Component, OnInit} from '@angular/core';
import {UserService} from "../../service/user.service";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ToastrService} from 'ngx-toastr';
import {finalize, Observable} from "rxjs";
import {AngularFireStorage} from "@angular/fire/compat/storage";


@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
  formEditUser?: FormGroup;
  users?: any
  title = "cloudsStorage";
  selectedFile = null;
  image: any;
  downloadURL?: Observable<string>;

  constructor(
    private userService: UserService,
    private fb: FormBuilder,
    private toastr: ToastrService,
    private storage: AngularFireStorage,
  ) {
  }

  ngOnInit(): void {
    this.userService.getById().subscribe(res => {
      this.users = res
      console.log(res)
      this.formEditUser = this.fb.group({
        'name': [this.users.name],
        'phone': [this.users.phone],
        'address': [this.users.address],
      })
    })

  }

  onFileSelected(event: any) {
    var n = Date.now();
    const file = event.target.files[0];
    const filePath = `RoomsImages/${n}`;
    const fileRef = this.storage.ref(filePath);
    const task = this.storage.upload(`RoomsImages/${n}`, file);
    task
      .snapshotChanges()
      .pipe(
        finalize(() => {
          this.downloadURL = fileRef.getDownloadURL();
          // @ts-ignore
          this.downloadURL.subscribe(url => {
            if (url) {
              this.image = url;
            }
            console.log(this.image);
          });
        })
      )
      .subscribe((url: any) => {
        if (url) {
        }
      });
  }

  editProfile() {
        let data = this.formEditUser?.value;
        this.userService.editProfileUser(data).subscribe(res => {
          console.log(res)
          this.toastr.success('Cập nhật thành công!', 'Trạng thái');
        })
  }

  uploadImage(){
    this.downloadURL?.subscribe(url => {
      let data = this.formEditUser?.value;
      data.image = url
      console.log(data.image)
      this.userService.updateImage(data).subscribe( res => {
        this.toastr.success('Upload ảnh thành công!', 'Trạng thái');
      })
    })
  }


}
