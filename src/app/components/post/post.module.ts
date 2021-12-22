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
import { PostDetailComponent } from './post-detail/post-detail.component';
import {BrowserModule} from "@angular/platform-browser";

import { PostSearchComponent } from './post-search/post-search.component';

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
  },
  {
    path: 'search',
    component: PostSearchComponent
  }
]

@NgModule({
  declarations: [
    PostDeleteComponent,
    PostEditComponent,
    PostListComponent,
    PostShowComponent,
    PostSearchComponent,
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
