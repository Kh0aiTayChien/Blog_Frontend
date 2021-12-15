import { Component, OnInit } from '@angular/core';
import {LoginService} from "../../../service/login.service";
import {Router} from "@angular/router";
import {FormBuilder, Validators} from "@angular/forms";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  formRegister: any;

  constructor(private registerServive: LoginService,
              private router: Router,
              private fb:FormBuilder) { }

  ngOnInit(): void {
    this.formRegister = this.fb.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]]
    });
  }

  register() {
    let data = this.formRegister?.value;
    console.log(data);
    this.registerServive.register(data).subscribe(res =>{
      this.router.navigate(['login']);
    })
  }
}
