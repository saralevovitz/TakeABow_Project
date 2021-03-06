import { Location } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import {  Router} from '@angular/router';
import { Observable } from 'rxjs';
import { User } from 'src/app/shared/models/user.model';
import { UserService } from 'src/app/shared/services/user.service';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

   userList: User []= []
   user:User=new User();
   res: Observable<any>;
   userToTOP: Number=1004;

  constructor(public httpClient: HttpClient, private router: Router,private userService:UserService, private location: Location) {

   }
   ngOnInit() {
   this.getTopUsers()
   }
    getTopUsers(){
      this.userService.getTopUsers().subscribe(u=>{
        console.log(u)
        this.userList=u
      })
   }

   backToPage(){
    this.location.back();
  }

    toAllUsersPage(){
      this.router.navigate(['all-users']);
    }
  
    isLoggedInUser(){
      return localStorage.getItem("userIdLogin")!=null;
    }
    toSignUpPage(){  
      this.router.navigate(['sign-up']);
      }
    
      toLoginPage(){
      this.router.navigate(['login']);
      }
  
  
    topFeedbacks(userId:Number){
      
       this.userToTOP=userId;
       this.router.navigate(['top-feedbacks',{"userToTOP": this.userToTOP}]);
    
    }
   
}
