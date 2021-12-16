import { Component, OnInit } from '@angular/core';
import {LoginService} from "../../service/login.service";
import {Router} from "@angular/router";
import {AuthService} from "../../service/auth.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  isAccountLogin= false;
  constructor(private logoutService: LoginService,
              private router: Router,
              private authService: AuthService) {
    console.log("123",this.isAccountLogin)
  }

  ngOnInit(): void {
    this.isAccountLogin = this.authService.checkLogin();
  }

  logout() {
    this.logoutService.logout().subscribe(res => {
      if (res.status === 'success'){
        localStorage.removeItem('token');
        this.router.navigate(['login']);
        alert("Đăng xuất thành công");
      }else {
        alert("Không thể đăng xuất");
      }
    });
  }
}
