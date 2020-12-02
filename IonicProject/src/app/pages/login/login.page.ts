import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(private router: Router) { }


  //לקשר לסי שארפ
  login(){
    this.router.navigate(['my-account']);
  }

  toHomePage(){
    this.router.navigate(['home']);
  }

  toMyAccountPage(){
    this.router.navigate(['my-account']);
  }
  
  ngOnInit() {
  }

}
