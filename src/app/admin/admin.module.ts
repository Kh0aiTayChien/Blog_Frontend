import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './layouts/header/header.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { SidebarComponent } from './layouts/sidebar/sidebar.component';
import {RouterModule, Routes} from "@angular/router";
import {BookListComponent} from "../components/book/book-list/book-list.component";
import {BookAddComponent} from "../components/book/book-add/book-add.component";
import {BookEditComponent} from "../components/book/book-edit/book-edit.component";
import {BookDetailComponent} from "../components/book/book-detail/book-detail.component";
import {BookDeleteComponent} from "../components/book/book-delete/book-delete.component";
import {AppRoutingModule} from "../app-routing.module";
import {ReactiveFormsModule} from "@angular/forms";
import { AdminMasterComponent } from './admin-master/admin-master.component';
import { HomeComponent } from './home/home.component';
import { PostListComponent } from './post/post-list/post-list.component';

const routes: Routes = [
  {
    path: 'dashboard',
    component: HomeComponent
  },
  {
    path: 'posts',
    component: PostListComponent
  }
]


@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    AdminMasterComponent,
    HomeComponent,
    PostListComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    [RouterModule.forChild(routes)],
  ]
})
export class AdminModule { }
