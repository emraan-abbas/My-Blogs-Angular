import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {CreateUserComponent} from './create-user/create-user.component';
import {LoginComponent} from './login/login.component';
import {AllUsersComponent} from './all-users/all-users.component';

const routes: Routes = [
  {
    path:'create',
    component: CreateUserComponent
  },
  {
    path:'',
    component: LoginComponent
  },
  {
    path:'all',
    component: AllUsersComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
