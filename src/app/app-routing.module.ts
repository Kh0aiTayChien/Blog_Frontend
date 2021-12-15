import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MasterComponent} from "./master/master.component";
import {AdminMasterComponent} from "./admin/admin-master/admin-master.component";

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
      },
    ]
  },
  {
    path: '',
    component: AdminMasterComponent,
    children: [
      {
        path: 'user',
        loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule)
      }
    ]
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
