import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { RouteConfigLoadEnd, Router, RouterLink, RouterLinkActive } from '@angular/router';
import { Observable } from 'rxjs';
import { User } from 'src/app/shared/models/user.model';
import { UserService } from 'src/app/shared/services/user.service';

//test

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  user:User=new User();
  res: Observable<any>;

  constructor(public httpClient: HttpClient, private router: Router,private userService:UserService) {
  }
  
  getTopUsers(){
    // this.res = this.httpClient.get('http://localhost:63522/api/user/getTopUsers', JSON.stringify(this.user),this.httpOptions);
    this.userService.getTopUsers().subscribe(res=>{this.user=res})
  }

  toSignUpPage(){  
    this.router.navigate(['sign-up']);
    }
  
    toLoginPage(){
    this.router.navigate(['login']);
    }
  
}
