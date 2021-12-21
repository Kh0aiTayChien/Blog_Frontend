import {Component, OnInit , TemplateRef } from '@angular/core';
import {LoginService} from "../../../service/login.service";
import {Router} from "@angular/router";
import {FormBuilder, Validators} from "@angular/forms";
import {NzNotificationService} from "ng-zorro-antd/notification";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  formRegister: any;
  errRegister:any;
  constructor(private registerServive: LoginService,
              private router: Router,
              private fb: FormBuilder,
              private notification: NzNotificationService) {
  }

  ngOnInit(): void {
    this.formRegister = this.fb.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]]
    });
  }

  register(template: TemplateRef<{}>): void {
    let data = this.formRegister?.value;
    this.registerServive.register(data).subscribe(res => {
      this.router.navigate(['login']);
      this.notification.template(template);
    },error => {
      let message = 'Tài khoản này đã tồn tại'
      this.errRegister = message;
    })
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
