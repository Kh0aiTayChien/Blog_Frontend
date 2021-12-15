import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HeaderComponent} from './layouts/header/header.component';
import {FooterComponent} from './layouts/footer/footer.component';
import {SidebarComponent} from './layouts/sidebar/sidebar.component';
import {RouterModule, Routes} from "@angular/router";
import {ReactiveFormsModule} from "@angular/forms";
import {AdminMasterComponent} from './admin-master/admin-master.component';
import {HomeComponent} from './home/home.component';
import {PostListComponent} from './post/post-list/post-list.component';
import {UserListComponent} from './user/user-list/user-list.component';
import {UserProfileComponent} from './user-profile/user-profile.component';

const routes: Routes = [
  {
    path: 'dashboard',
    component: HomeComponent
  },
  {
    path: 'posts',
    component: PostListComponent
  },
  {
    path: '',
    component: UserListComponent
  },
  {
    path: 'profile',
    component: UserProfileComponent
  }
]


@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    AdminMasterComponent,
    HomeComponent,
    PostListComponent,
    UserListComponent,
    UserProfileComponent

  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    [RouterModule.forChild(routes)],
  ]
})
export class AdminModule {
}
