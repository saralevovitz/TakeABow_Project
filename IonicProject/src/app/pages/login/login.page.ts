import { Location } from '@angular/common';
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

  constructor(private router: Router, private userService: UserService, private location: Location) { }
   
  userLogin:User= new User()
  IdLogin: number
  isCorrect:Boolean
  countWrong:number=0
 

    login(){

    this.userService.checkLogin(this.userLogin).subscribe(res=>
     this.isCorrect=res)
     if(this.isCorrect==false)
        this.countWrong++
        
        else{
    localStorage.setItem('userIdLogin', this.userLogin.Id.toString())
    this.IdLogin=+ localStorage.getItem('userIdLogin')
    this.userService.GetUser(this.IdLogin).subscribe((res:User)=>{
      this.userService.user=res
      },err=>console.error(err))
  }
    this.router.navigate(['home']);
        
  }

  backToPage(){
    this.location.back();
  }

  toSignUpPage(){
    this.router.navigate(['sign-up']);
  }

  toHomePage(){
    this.router.navigate(['home']);
  }

  ngOnInit() {
   
  }

  
}
