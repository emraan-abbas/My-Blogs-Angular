import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CreateUserComponent } from './create-user/create-user.component';

import { HttpClientModule } from '@angular/common/http';

import { ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { AllUsersComponent } from './all-users/all-users.component';


import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatTableModule} from '@angular/material/table';
import {MatCardModule} from '@angular/material/card';
import {MatDialogModule} from '@angular/material/dialog';

import { JwtServiceService } from './Services/jwt-service.service';
import { HomeComponent } from './home/home.component';
import { BlogCrdComponent } from './home/blog-crd/blog-crd.component';
import { BlogExpComponent } from './home/blog-exp/blog-exp.component';
import { CreateBlogComponent } from './home/create-blog/create-blog.component';
import { AdminHomeComponent } from './admin-home/admin-home.component';

@NgModule({
  declarations: [
    AppComponent,
    CreateUserComponent,
    LoginComponent,
    AllUsersComponent,
    HomeComponent,
    BlogCrdComponent,
    BlogExpComponent,
    CreateBlogComponent,
    AdminHomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,

    ReactiveFormsModule,
    HttpClientModule,

    MatInputModule,
    MatButtonModule,
    MatTableModule,
    MatCardModule,
    MatDialogModule
  ],
  providers: [
    // CdkColumnDef
    JwtServiceService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
