import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {MasterComponent} from "./master/master.component";

import {AdminMasterComponent} from "./admin/admin-master/admin-master.component";

import {AuthenticationComponent} from "./layout/login/authentication/authentication.component";
import {RegisterComponent} from "./layout/login/register/register.component";
import {ChangepasswordComponent} from "./layout/login/changepassword/changepassword.component";
import {CommonModule} from "@angular/common";

const routes: Routes = [
  {
    path: '',
    component: MasterComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('./components/home/home.module').then(m => m.HomeModule),
      },
      // {
      //   path: '',
      //   loadChildren: () => import('./components/content/content.module').then(m => m.ContentModule),
      // },
    ]
  },
  {
    path: '',
    component: AdminMasterComponent,
    children: [
      {
        path: 'users',
        loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule)
      }
    ]
  },

  {
    path: 'login',
    component: AuthenticationComponent
  },

  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'changepassword',
    component: ChangepasswordComponent
  }

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
