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
  constructor(private changeService: LoginService,
              private router: Router,
              private fb: FormBuilder,
              private notification: NzNotificationService) { }

  ngOnInit(): void {
    this.formChange = this.fb.group({
      current_password: ['',[Validators.required]],
      password: ['',[Validators.required]],
      confirm_password: ['',[Validators.required]]
    })
  }

  changePassWord(type: string) {
    let data = this.formChange?.value;
    console.log(data);
    this.changeService.changePassWord(data).subscribe(res =>{
      console.log(res);
      if (res.status === 'success'){
        this.router.navigate(['login']);
        this.notification.create(
          type,
          'Notification Title',
          'This is the content of the notification. This is the content of the notification. This is the content of the notification.'
        );
      }else if (res.status === 'error'){
        this.errChangePass = res.message;
      }
    });
  }
}
