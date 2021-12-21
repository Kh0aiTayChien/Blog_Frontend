import { Component, OnInit } from '@angular/core';
import {PostService} from "../../../service/post.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-post-of-user',
  templateUrl: './post-of-user.component.html',
  styleUrls: ['./post-of-user.component.css']
})
export class PostOfUserComponent implements OnInit {

  posts: any[] = [];

  constructor(private postService: PostService,
              private router: ActivatedRoute) { }

  ngOnInit(): void {
    let id = this.router.snapshot.paramMap.get('id');
    this.showPostWithAuthor(id);
  }

  showPostWithAuthor(id: any) {
    this.postService.showPostWithAuthor(id).subscribe(res =>{
      this.posts = res;
    })
  }

}
