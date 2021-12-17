import { Component, OnInit } from '@angular/core';
import {UserService} from "../../../service/user.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
   name? : any
  constructor(private userService : UserService) { }

  ngOnInit(): void {
     let user = JSON.parse(<string>localStorage.getItem('user'))
     this.name = user.name
  }

}
