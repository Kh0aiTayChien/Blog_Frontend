import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MasterComponent} from "./master/master.component";
const routes: Routes = [
  {
    path : '',
    component: MasterComponent,
    children: [
      {
        path: 'book',
        loadChildren: () => import('./components/book/book.module').then(m => m.BookModule),
      },
      {
        path: 'post',
        loadChildren: () => import('./components/post/post.module').then(m => m.PostModule),
      },
      {
        path: '',
        loadChildren: () => import('./components/content/content.module').then(m => m.ContentModule),
      }
    ]
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
