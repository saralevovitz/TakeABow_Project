import { Component } from '@angular/core';
import { RouteConfigLoadEnd, Router, RouterLink, RouterLinkActive } from '@angular/router';

//test

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  
  constructor(private router: Router) {
  }
  
  toSignUpPage(){  
    this.router.navigate(['sign-up']);
    }
  
    toLoginPage(){
    this.router.navigate(['login']);
    }
  
}
