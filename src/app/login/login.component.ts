import { Component, OnInit } from '@angular/core';
import { UserService } from '../Services/user.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { catchError } from 'rxjs';
import { JwtServiceService } from '../Services/jwt-service.service';
import  {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(
    private userService: UserService, 
    private jwtService: JwtServiceService,
    private router: Router
    ) { }

  ngOnInit(): void {
  }


  // Log In Form
  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required])
  });

  resData: any;
  token:any;
  userRole: any;

  // Log In Function
  login() {
    return this.userService.logIn(this.loginForm.value)
    .pipe(
      catchError(err => {
        console.log('Error :', err);
        return err;
      })
    ).subscribe(res =>{
      this.resData = res
      this.token = this.resData.token
      localStorage.setItem('token', this.resData.token)
      this.userRole = this.jwtService.DecodeToken(this.token)
      this.router.navigateByUrl('/home/crd')
      }
    )
  };


  
  // Validators here

  get emailValidator() {
    return this.loginForm.get('email');
  };

  get passwordValidator() {
    return this.loginForm.get('password');
  };

}
