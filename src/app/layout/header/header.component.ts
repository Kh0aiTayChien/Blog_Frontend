import { Component, OnInit } from '@angular/core';
import {LoginService} from "../../service/login.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private logoutService: LoginService,
              private router: Router) { }

  ngOnInit(): void {
  }

  logout() {
    this.logoutService.logout().subscribe(res => {
      localStorage.removeItem('remove_token');
      this.router.navigate(['']);
    });
  }
}
