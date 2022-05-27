import { Component, OnInit } from '@angular/core';

import { UserService } from '../Services/user.service'

@Component({
  selector: 'app-all-users',
  templateUrl: './all-users.component.html',
  styleUrls: ['./all-users.component.scss']
})
export class AllUsersComponent implements OnInit {

  constructor(private getAllUsers: UserService) { }

  ngOnInit(): void {
  }

  allUsers:any;

  getAll() {
    this.getAllUsers.getAllUserData().subscribe(
      (res: any) =>{
        console.log('=============')
        console.log(res.allUsers)
        this.allUsers = res.allUsers;
      }
    )
  }

}