import { Component, OnInit } from '@angular/core';
import {PostService} from "../../../service/post.service";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  posts: any[] = [];

  gridStyle = {
    width: '50%',
    textAlign: 'left'
  };
  first_gridStyle = {
    width: '100%',
    textAlign: 'center'
  };
  constructor(private postService: PostService) { }

  ngOnInit(): void {
    this.showPostPublic();
  }

  showPostPublic() {
    this.postService.showPublic().subscribe(res => {
      console.log(res)
      this.posts = res;
    })
  }

}
