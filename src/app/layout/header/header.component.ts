import {Component, OnInit} from '@angular/core';
import {LoginService} from "../../service/login.service";
import {Router} from "@angular/router";
import {AuthService} from "../../service/auth.service";
import {NzNotificationService} from "ng-zorro-antd/notification";
import {PostService} from "../../service/post.service";
import {FormBuilder, Validators} from "@angular/forms";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  name?: string;
  isAccountLogin = false;
  formSearch?: any;

  constructor(private logoutService: LoginService,
              private router: Router,
              private fb: FormBuilder,
              private authService: AuthService,
              private notification: NzNotificationService,
              private postService: PostService) {
  }

  ngOnInit(): void {
    this.isAccountLogin = this.authService.checkLogin();
    let user = JSON.parse(<string>localStorage.getItem('user'))
    this.name = user.name;
    this.formSearch = this.fb.group({
      'title': ['', [Validators.required]]
    })
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

  search() {
    let data = this.formSearch?.value;
    this.postService.findPost(data).subscribe(res => {
    });
  }
}
