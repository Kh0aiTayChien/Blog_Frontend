import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {DashboardComponent} from "./dashboard/dashboard.component";
import {NzCardModule} from "ng-zorro-antd/card";
import {CategoryComponent} from "../category/category.component";
import {NzPaginationModule} from "ng-zorro-antd/pagination";
import { PostDetailComponent } from '../post/post-detail/post-detail.component';
import {PostOfUserComponent} from "../post/post-of-user/post-of-user.component";
import {CreatePostComponent} from "../../admin/user/create-post/create-post.component";

const routes: Routes = [
  {
    path: "",
    component: DashboardComponent
  },
  {
    path: "ppl/category/:id",
    component: CategoryComponent
  },
  {
    path: "ofUser/:id",
    component: PostOfUserComponent
  },
  {
    path: "detail/:id",
    component: PostDetailComponent
  },
  {
    path: 'create/post',
    component: CreatePostComponent
  },
]


@NgModule({


  declarations: [DashboardComponent, CategoryComponent, PostOfUserComponent],
  imports: [
    CommonModule,
    [RouterModule.forChild(routes)],
    NzCardModule,
    NzPaginationModule,
  ]
})
export class HomeModule {
}
