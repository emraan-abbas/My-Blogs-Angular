import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { JwtServiceService } from '../Services/jwt-service.service';
import  {Router} from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class RoleCheckGuard implements CanActivate {
  
  token: any;
  role: any;

  constructor(private jwtService: JwtServiceService, private router: Router) { }
  
  canActivate() {
    this.token = localStorage.getItem('token')
    this.role = this.jwtService.DecodeToken(this.token)

    console.log('ROLE CHECK GUARD => ', this.role)
    if(this.role === 'Admin'){
      return true;
    }
    else{
      this.router.navigateByUrl('/login')
      return false;
    }

  }
  
}
