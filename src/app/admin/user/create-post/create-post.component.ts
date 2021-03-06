import {Component, OnInit} from '@angular/core';
import {UserService} from "../../../service/user.service";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
// @ts-ignore
import {AngularFireStorage} from "@angular/fire/compat/storage";
import {finalize, Observable} from "rxjs";
// @ts-ignore
import {ToastrService} from "ngx-toastr";
import {Router} from "@angular/router";

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.css']
})
export class CreatePostComponent implements OnInit {
  formCreatePost?: FormGroup
  categories: any[] = []
  title = "cloudsStorage";
  selectedFile = null;
  fb1: any;
  downloadURL?: Observable<string>;

  constructor(private userService: UserService,
              private fb: FormBuilder,
              private storage: AngularFireStorage,
              private toastr: ToastrService,
              private router: Router
  ) {
  }

  ngOnInit(): void {
    this.createPost();
    this.userService.getCategories().subscribe(res => {
      console.log(res)
      this.categories = res
      console.log(this.categories)
    })
    // console.log(this.categories)
    console.log(this.fb1)
    this.formCreatePost = this.fb.group({
      'title': ['', [Validators.required]],
      '_content': ['', [Validators.required]],
      'image': [this.fb1],
      'desc': ['', [Validators.required]],
      'access_modifier': ['', [Validators.required]],
      'category_id': ['',Validators.required]
    })

  }

  createPost() {
    this.downloadURL?.subscribe(url => {
      let data = this.formCreatePost?.value
      data.image = url
      this.userService.createPost(data).subscribe(res => {
        console.log(res)
        this.toastr.success('Tạo mới bài viết thành công', 'Trạng thái');
        this.router.navigate(['/']);
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
              this.fb1 = url;
            }
            console.log(this.fb1);
          });
        })
      )
      .subscribe((url: any) => {
        if (url) {
        }
      });
  }
  get title2(){
    return this.formCreatePost?.get('title')
  }
   get content(){
    return this.formCreatePost?.get('_content')
  }
   get desc(){
    return this.formCreatePost?.get('desc')
  }
   get accessModifier(){
    return this.formCreatePost?.get('access_modifier')
  }
  get category(){
    return this.formCreatePost?.get('category_id')
  }


}
