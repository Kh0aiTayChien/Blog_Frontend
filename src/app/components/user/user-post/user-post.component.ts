import { Component, OnInit } from '@angular/core';
import {UserService} from "../../../service/user.service";

@Component({
  selector: 'app-user-post',
  templateUrl: './user-post.component.html',
  styleUrls: ['./user-post.component.css']
})
export class UserPostComponent implements OnInit {
   posts? : any[] = []
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
