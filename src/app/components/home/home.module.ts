import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {DashboardComponent} from "./dashboard/dashboard.component";
import {NzCardModule} from "ng-zorro-antd/card";
import {PostDetailComponent} from "../post/post-detail/post-detail.component";

const routes: Routes = [
  {
    path: "",
    component: DashboardComponent
  },
  {
    path: "detail/:id",
    component: PostDetailComponent
  }
]


@NgModule({
  declarations: [DashboardComponent],
  imports: [
    CommonModule,
    [RouterModule.forChild(routes)],
    NzCardModule,
  ]
})
export class HomeModule {
}
