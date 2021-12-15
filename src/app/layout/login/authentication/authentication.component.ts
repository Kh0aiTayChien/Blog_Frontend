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
    this.loginService.login(data).subscribe(
      res => {
      if (res.status === 'success'){
        localStorage.setItem('token', res.token);
        localStorage.setItem('user', JSON.stringify(res.user));
        this.router.navigate(['home']);
        alert('đăng nhập thành công');
      }else {
        this.notification
          .blank(
            'Notification Title',
            'This is the content of the notification. This is the content of the notification. This is the content of the notification.'
          )
          .onClick.subscribe(() => {
          console.log('notification clicked!');
        });
      }
    });
  }
}
