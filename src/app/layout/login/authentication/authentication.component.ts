import {Component, OnInit} from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {LoginService} from "../../../service/login.service";
import {NzNotificationService} from "ng-zorro-antd/notification";

@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.css']
})
export class AuthenticationComponent implements OnInit {
  formLogin: any;
  errLogin: any;

  constructor(private fb: FormBuilder,
              private loginService: LoginService,
              private router: Router,
              private notification: NzNotificationService) {
  }

  ngOnInit(): void {
    this.formLogin = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]]
    });
  }

  login() {
    const data = this.formLogin?.value;
    this.loginService.login(data).subscribe(res => {
      if (res.status === 'success') {
        localStorage.setItem('token', res.token);
        localStorage.setItem('user', JSON.stringify(res.user));
        localStorage.setItem('id', JSON.stringify(res.user.id));
        this.router.navigate(['']);
        this.notification
          .blank(
            'Đăng nhập thành công',
            'Chào mừng bạn đên với trang Blog'
          )
          .onClick.subscribe(() => {
          console.log('notification clicked!');
        });
      } else if (res.status === 'error') {
        this.notification
          .blank(
            'Đăng nhập thất bại',
            'Vui lòng nhập lại',
          )
          .onClick.subscribe(() => {
          console.log('notification clicked!');
        });
        this.errLogin = res.message;
      }
    });
  }

  visibility() {
    let x: any = document.getElementById('Password');
    if (x.type === 'password') {
      x.type = "text";
      // @ts-ignore
      $('#eyeShow').show();
      // @ts-ignore
      $('#eyeSlash').hide();
    } else {
      x.type = "password";
      // @ts-ignore
      $('#eyeShow').hide();
      // @ts-ignore
      $('#eyeSlash').show();
    }
  }
}
