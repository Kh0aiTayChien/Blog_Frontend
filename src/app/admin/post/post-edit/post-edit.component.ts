import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {finalize, Observable} from "rxjs";
import {AngularFireStorage} from "@angular/fire/compat/storage";
import {ToastrService} from "ngx-toastr";
import {PostService} from "../../../service/post.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-post-edit',
  templateUrl: './post-edit.component.html',
  styleUrls: ['./post-edit.component.css']
})
export class PostEditComponent implements OnInit {
  formEditPost? : FormGroup
  categories : any[] = []
  title = "cloudsStorage";
  selectedFile = null;
  fb1: any;
  downloadURL?: Observable<string>;
  post : any
  constructor(
    private fb: FormBuilder,
    private storage: AngularFireStorage,
    private toastr: ToastrService,
    private postService: PostService,
    private router: ActivatedRoute
  ) { }

  ngOnInit(): void {
    let id = this.router.snapshot.paramMap.get('id')
    this.postService.getPostById(id).subscribe(res =>{
      console.log(res)
      this.post = res.post
      console.log(this.post)
      this.categories = res.categories
      this.formEditPost = this.fb.group({
        'title' : [this.post.title],
        '_content' : [this.post.content],
        'desc' : [this.post.desc],
        'access_modifier' : [this.post.access_modifier],
        'category_id' : [this.post.category_id],
        'image' : []
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

  editPost(){
    this.downloadURL?.subscribe(url => {
      let id = this.router.snapshot.paramMap.get('id')
      let data = this.formEditPost?.value
      data.image = url
      this.postService.editPost(id ,data).subscribe(res => {
        this.toastr.success('Cập nhật bài viết thành công', 'Trạng thái');
      })
    })
  }

}
