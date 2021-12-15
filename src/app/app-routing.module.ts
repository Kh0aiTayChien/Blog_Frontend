import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {MasterComponent} from "./master/master.component";
import {AuthenticationComponent} from "./layout/login/authentication/authentication.component";
import {RegisterComponent} from "./layout/login/register/register.component";

const routes: Routes = [
  {
    path: '',
    component: MasterComponent,
    children: [
      {
        path: 'blogs',
        loadChildren: () => import('./components/post/post.module').then(m => m.PostModule),
      },
      {
        path: '',
        loadChildren: () => import('./components/content/content.module').then(m => m.ContentModule),
      },
    ],
  },

  {
    path: 'login',
    component: AuthenticationComponent
  },

  {
    path: 'register',
    component: RegisterComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
