import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {UserPostComponent} from "./user-post/user-post.component";
import {ReactiveFormsModule} from "@angular/forms";
import {RouterModule} from "@angular/router";
import {UserRoutingModule} from "./user-routing.module";



@NgModule({
  declarations: [
    UserPostComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    ReactiveFormsModule,
  ]
})
export class UserModule { }
