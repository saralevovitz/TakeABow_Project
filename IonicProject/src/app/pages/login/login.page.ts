import { Component, OnInit } from '@angular/core';
import { Form } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/shared/models/user.model';
import { UserService } from 'src/app/shared/services/user.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(private router: Router, private userService: UserService) { }
   
  userLogin:User= new User()
  IdLogin: number
 
  login(){
    this.userService.checkLogin(this.userLogin).subscribe(Boolean)
    localStorage.setItem('userIdLogin', this.userLogin.Id.toString())
    this.IdLogin=+ localStorage.getItem('userIdLogin')
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
