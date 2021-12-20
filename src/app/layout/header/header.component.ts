import {Component, OnInit} from '@angular/core';
import {LoginService} from "../../service/login.service";
import {Router} from "@angular/router";
import {AuthService} from "../../service/auth.service";
import {NzNotificationService} from "ng-zorro-antd/notification";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  name?: string;
  isAccountLogin = false;

  constructor(private logoutService: LoginService,
              private router: Router,
              private authService: AuthService,
              private notification: NzNotificationService) {
  }

  ngOnInit(): void {
    this.isAccountLogin = this.authService.checkLogin();
    let user = JSON.parse(<string>localStorage.getItem('user'))
    this.name = user.name
  }

  logout() {
    this.logoutService.logout().subscribe(res => {
      localStorage.removeItem('token');
      this.router.navigate(['login']);
      this.notification
        .blank(
          'Đăng xuất thành công',
          'Hẹn gặp lại bạn lần tới',
        )
        .onClick.subscribe(() => {
        console.log('notification clicked!');
      });
    });
  }
}
