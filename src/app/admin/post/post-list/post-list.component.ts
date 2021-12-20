import { Component, OnInit } from '@angular/core';
import {UserService} from "../../../service/user.service";
import * as moment from "moment";
import {ActivatedRoute} from "@angular/router";
import {PostService} from "../../../service/post.service";
import {ToastrService} from "ngx-toastr";

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {

  posts : any
  date : any
  constructor(private userService : UserService,
              private router : ActivatedRoute,
              private postService : PostService,
              private toastr: ToastrService,
              ) { }

  ngOnInit(): void {
    this.getPost();
  }
  getPost(){
    this.userService.getPostByUser().subscribe(res => {
      this.posts = res

    })
  }
  deletePost(id : any){
    // let id = this.router.snapshot.paramMap.get('id')
    this.postService.deletePost(id).subscribe( res => {
      this.toastr.success('Xóa thành công!', 'Trạng thái');
      this.posts = res
      console.log(res)
    })
  }


}
