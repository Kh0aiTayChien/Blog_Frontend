import { Component, OnInit } from '@angular/core';
import {PostService} from "../../../service/post.service";
import {CategoryService} from "../../../service/category.service";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  posts: any[] = [];

  category: any[] = [];

  gridStyle = {
    width: '50%',
    textAlign: 'left'
  };
  first_gridStyle = {
    width: '100%',
    textAlign: 'center'
  };
  constructor(private postService: PostService,
              private cateService: CategoryService) { }

  ngOnInit(): void {
    this.showPostPublic();
    this.cateService.getAll().subscribe(res =>{
      this.category = res;
    })
  }

  showPostPublic() {
    this.postService.showPublic().subscribe(res => {
      console.log(res)
      this.posts = res;
    })
  }



}
