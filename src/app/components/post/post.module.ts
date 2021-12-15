import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {RouterModule, Routes} from "@angular/router";
import { PostDeleteComponent } from './post-delete/post-delete.component';
import { PostEditComponent } from './post-edit/post-edit.component';
import { PostListComponent } from './post-list/post-list.component';
import { PostShowComponent } from './post-show/post-show.component';
import {PostCreateComponent} from "./post-create/post-create.component";
import {NzCardModule} from "ng-zorro-antd/card";


const routes: Routes = [
  {
    path: "",
    component: PostShowComponent
  },
  {
    path: "create",
    component: PostCreateComponent
  },
  {
    path: ":id/edit",
    component: PostEditComponent
  },
  // {
  //   path: ":id/detail",
  //   component:
  {
    path: ":id/delete",
    component: PostDeleteComponent
  }
]

@NgModule({
  declarations: [
    PostDeleteComponent,
    PostEditComponent,
    PostListComponent,
    PostShowComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    [RouterModule.forChild(routes)],
    NzCardModule,
  ]
})
export class PostModule { }
