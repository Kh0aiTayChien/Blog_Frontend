import { Component, OnInit } from '@angular/core';
import {Post} from "../Post";
import {PostService} from "../../../service/post.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.css']
})
export class PostCreateComponent implements OnInit {
  Post : Post = new Post();
  private addSub: any;
  constructor(private data : PostService, private router: Router ) { }

  ngOnInit(): void {
  }
  formSubmit(){
    //set the value of blogPost.tags to the value of the tags property
    // this.Post.tags = this.tags.split(",").map(tag=>tag.trim());
    // this.Post.name = ;
    // this.Post.postDate = new Date().toLocaleDateString();
    // this.Post.postedBy = "WEB422 Student";
    // this.Post.views = 0;
    this.addSub = this.data.create(this.Post).subscribe(()=>{
      this.router.navigate(['/']);
    });
  }
}
