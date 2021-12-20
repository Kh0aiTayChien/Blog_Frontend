import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {DashboardComponent} from "./dashboard/dashboard.component";
import {NzCardModule} from "ng-zorro-antd/card";
import {CategoryComponent} from "../category/category.component";
import {NzPaginationModule} from "ng-zorro-antd/pagination";
import { PostDetailComponent } from '../post/post-detail/post-detail.component';

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
    path: "detail/:id",
    component: PostDetailComponent
  }
]


@NgModule({
  declarations: [DashboardComponent, CategoryComponent],
  imports: [
    CommonModule,
    [RouterModule.forChild(routes)],
    NzCardModule,
    NzPaginationModule,
  ]
})
export class HomeModule {
}
