import { Component, OnInit } from '@angular/core';
import {PostService} from "../../../service/post.service";
import {ActivatedRoute} from "@angular/router";
import * as moment from "moment";



@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.css']
})
export class PostDetailComponent implements OnInit {
   post : any
   user : any
  constructor(private postService : PostService,
              private router : ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.detailPost()
  }
  detailPost(){
    let id = this.router.snapshot.paramMap.get('id');
    this.postService.showDetailPost(id).subscribe( res => {
      this.post = res.post
      this.user = res.user
      let date = this.post.created_at
      this.post.created_at = moment(date).format('MMMM Do YYYY, h:mm:ss a');
    })
  }


}
