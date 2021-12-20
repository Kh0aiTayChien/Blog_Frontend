import { Component, OnInit } from '@angular/core';
import {UserService} from "../../../service/user.service";
import * as moment from "moment";

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {

  posts : any
  date : any
  constructor(private userService : UserService) { }

  ngOnInit(): void {
    this.getPost();
  }
  getPost(){
    this.userService.getPostByUser().subscribe(res => {
      console.log(res)
      this.posts = res

    })
  }


}
