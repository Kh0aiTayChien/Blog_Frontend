import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { MasterComponent } from './master/master.component';
import { SidebarComponent } from './layout/sidebar/sidebar.component';
import {HttpClient, HttpClientModule} from "@angular/common/http";
import { PostCreateComponent } from './components/post/post-create/post-create.component';
import {NzMenuModule} from "ng-zorro-antd/menu";
import {NzToolTipModule} from "ng-zorro-antd/tooltip";
import {NzIconModule} from "ng-zorro-antd/icon";
import {NzLayoutModule} from "ng-zorro-antd/layout";
import {FormsModule} from "@angular/forms";
import {ReactiveFormsModule} from "@angular/forms";
import {AuthenticationComponent} from "./layout/login/authentication/authentication.component";
import {RegisterComponent} from "./layout/login/register/register.component";
import {NzNotificationModule} from "ng-zorro-antd/notification";
import { DashboardComponent } from './components/home/dashboard/dashboard.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {ToastrModule} from "ngx-toastr";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MasterComponent,
    SidebarComponent,
    PostCreateComponent,
    AuthenticationComponent,
    RegisterComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NzMenuModule,
    NzToolTipModule,
    NzIconModule,
    NzLayoutModule,
    FormsModule,
    ReactiveFormsModule,
    NzNotificationModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
  ],
  providers: [],
  exports: [
    HeaderComponent,
    SidebarComponent,
    FooterComponent,

  ],
  bootstrap: [AppComponent]

})
export class AppModule { }
