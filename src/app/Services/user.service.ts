import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class UserService {
  token: any = localStorage.getItem('token')

  constructor(private http: HttpClient) { }

  transportUserData(userData: any) {
    return this.http.post('http://localhost:3000/myblog/user/create', userData, 
    { headers:
      {
        token: this.token
      }
    })
  };

  logIn(loginData: any) {
    return this.http.post('http://localhost:3000/myblog/user/login', loginData)
  };

  getAllUserData() {
    return this.http.get('http://localhost:3000/myblog/user/all')
  };
}
