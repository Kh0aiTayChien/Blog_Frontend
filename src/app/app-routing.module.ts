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
        loadChildren: () => import('./components/book/book.module').then(m => m.BookModule)
      }
    ]
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
