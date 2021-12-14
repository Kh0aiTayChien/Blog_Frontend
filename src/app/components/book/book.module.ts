import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {BookListComponent} from "./book-list/book-list.component";
import {BookAddComponent} from "./book-add/book-add.component";
import {BookDetailComponent} from "./book-detail/book-detail.component";
import {BookDeleteComponent} from "./book-delete/book-delete.component";
import {BookEditComponent} from "./book-edit/book-edit.component";
import {Routes, RouterModule} from "@angular/router";
import {ReactiveFormsModule} from "@angular/forms";

const routes: Routes = [
  {
    path: "",
    component: BookListComponent
  },
  {
    path: "create",
    component: BookAddComponent
  },
  {
    path: ":id/edit",
    component: BookEditComponent
  },
  {
    path: ":id/detail",
    component: BookDetailComponent
  },
  {
    path: ":id/delete",
    component: BookDeleteComponent
  }
]

@NgModule({
  declarations: [
    BookAddComponent,
    BookDetailComponent,
    BookDeleteComponent,
    BookListComponent,
    BookEditComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    [RouterModule.forChild(routes)],
  ]
})
export class BookModule { }
