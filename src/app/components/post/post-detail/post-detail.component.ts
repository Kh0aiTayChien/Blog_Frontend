import { Component, OnInit } from '@angular/core';
import {PostService} from "../../../service/post.service";
import {ActivatedRoute, Router} from "@angular/router";
import * as moment from "moment";
import {FormBuilder, FormGroup} from "@angular/forms";
import {UserService} from "../../../service/user.service";
import {getDatabase} from "@angular/fire/database";
import {ToastrService} from "ngx-toastr";



@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.css']
})
export class PostDetailComponent implements OnInit {
   post : any
   user : any
   user2 : any
   comments : any[] = []
  formCreateComment? : FormGroup
  constructor(private postService : PostService,
              private router : ActivatedRoute,
              private fb : FormBuilder,
              private userService : UserService,
              private route : Router,
              private toastr: ToastrService
  ) { }

  ngOnInit(): void {
    this.detailPost();
    this.getComments();
    this.userService.getById().subscribe( res => {
       this.user2 = res
      this.formCreateComment = this.fb.group({
        '_content' : [],
        'user_id' : [],
        'post_id' : [this.post.id],
      })
    })

  }
  detailPost(){
    let id = this.router.snapshot.paramMap.get('id');
    this.postService.showDetailPost(id).subscribe( res => {
      this.post = res.post
      this.user = res.user[0]
      console.log(this.user)
      let date = this.post.created_at
      this.post.created_at = moment(date).format('MMMM Do YYYY, h:mm:ss a');
    })
  }
  getComments(){
     let id = this.router.snapshot.paramMap.get('id');
     this.postService.getComment(id).subscribe(  res => {
       this.comments = res
     })
  }
  comment(){
     let data = this.formCreateComment?.value
     let user = localStorage.getItem('token')
    console.log(user)
     if(user){
       this.postService.createComment(data).subscribe( res => {
         this.getComments();
         this.formCreateComment = this.fb.group({
           '_content' : [],
         })
       })
     } else {
       this.toastr.error("Bạn cần phải đăng nhập")
     }
  }


}
