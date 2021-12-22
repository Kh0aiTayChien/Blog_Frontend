import {Component, OnInit, TemplateRef} from '@angular/core';
import {LoginService} from "../../../service/login.service";
import {Router} from "@angular/router";
import {FormBuilder, Validators} from "@angular/forms";
import {NzNotificationService} from "ng-zorro-antd/notification";

@Component({
  selector: 'app-changepassword',
  templateUrl: './changepassword.component.html',
  styleUrls: ['./changepassword.component.css']
})
export class ChangepasswordComponent implements OnInit {
  formChange: any;
  errChangePass: any;
  password: any;
  password1: any;
  password2: any;

  constructor(private changeService: LoginService,
              private router: Router,
              private fb: FormBuilder,
              private notification: NzNotificationService) {
  }

  ngOnInit(): void {
    this.formChange = this.fb.group({
      current_password: ['', [Validators.required]],
      password: ['', [Validators.required]],
      confirm_password: ['', [Validators.required]]
    })
  }

  changePassWord(type: string) {
    let data = this.formChange?.value;
    console.log(data);
    this.changeService.changePassWord(data).subscribe(res => {
      console.log(res);
      if (res.status === 'success') {
        this.router.navigate(['login']);
        this.notification.create(
          type,
          'Đổi mật khẩu thành công',
          'Mật khẩu của bạn đã được đổi thành công vui lòng đăng nhập lại'
        );
      } else if (res.status === 'error') {
        this.errChangePass = res.message;
      }
    });
  }

  visibility() {
    let x: any = document.getElementById('currentPassword');
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

  visibility1() {
    let x: any = document.getElementById('newPassword');
    if (x.type === 'password') {
      x.type = "text";
      // @ts-ignore
      $('#eyeShow1').show();
      // @ts-ignore
      $('#eyeSlash1').hide();
    } else {
      x.type = "password";
      // @ts-ignore
      $('#eyeShow1').hide();
      // @ts-ignore
      $('#eyeSlash1').show();
    }
  }

  visibility2() {
    let x: any = document.getElementById('confirmPassword');
    if (x.type === 'password') {
      x.type = "text";
      // @ts-ignore
      $('#eyeShow2').show();
      // @ts-ignore
      $('#eyeSlash2').hide();
    } else {
      x.type = "password";
      // @ts-ignore
      $('#eyeShow2').hide();
      // @ts-ignore
      $('#eyeSlash2').show();
    }
  }
}
