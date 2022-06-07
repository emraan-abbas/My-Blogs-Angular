import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {CreateUserComponent} from './create-user/create-user.component';
import {LoginComponent} from './login/login.component';
import {AllUsersComponent} from './all-users/all-users.component';
import {HomeComponent} from './home/home.component';
import {AdminHomeComponent} from './admin-home/admin-home.component';
import {BlogCrdComponent} from './home/blog-crd/blog-crd.component';
import {BlogExpComponent} from './home/blog-exp/blog-exp.component';
import {CreateBlogComponent} from './home/create-blog/create-blog.component';

import { TokenCheckGuard } from './guards/token-check.guard';
import { RoleCheckGuard } from './guards/role-check.guard';

const routes: Routes = [
  {
    path:'',
    component: LoginComponent
  },
  {
    path:'home',
    component: HomeComponent,
    children: [
      {
        path:'crd',
        component: BlogCrdComponent
      },
      {
        path:'exp',
        component: BlogExpComponent
      },
      {
        path:'create-blog',
        component: CreateBlogComponent
      }
    ]
  },
  {
    path:'admin',
    component:AdminHomeComponent
  },
  {
    path:'create',
    component: CreateUserComponent,
    canActivate: [TokenCheckGuard, RoleCheckGuard]
  },
  {
    path:'all-users',
    component: AllUsersComponent,
    canActivate: [TokenCheckGuard, RoleCheckGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
