import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {ContentComponent} from "./content/content.component";

const routes: Routes = [
  {
    path: "",
    component: ContentComponent

  }
]

@NgModule({
  declarations: [
    ContentComponent
  ],
  imports: [
    CommonModule,
    [RouterModule.forChild(routes)]
  ]
})
export class ContentModule { }
