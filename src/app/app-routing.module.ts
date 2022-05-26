import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {CreateUserComponent} from './create-user/create-user.component';
import {LoginComponent} from './login/login.component';

const routes: Routes = [
  {
    path:'create',
    component: CreateUserComponent
  },
  {
    path:'',
    component: LoginComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
