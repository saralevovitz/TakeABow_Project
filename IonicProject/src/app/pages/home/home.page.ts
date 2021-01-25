import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute, RouteConfigLoadEnd, Router, RouterLink, RouterLinkActive } from '@angular/router';
import { Observable } from 'rxjs';
import { User } from 'src/app/shared/models/user.model';
import { UserService } from 'src/app/shared/services/user.service';
import { TopFeedbacksPage } from '../top-feedbacks/top-feedbacks.page';

//test

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

  constructor(public httpClient: HttpClient, private router: Router,private userService:UserService) {

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
   tomyAccountPage(){
    this.router.navigate(['my-account']);
   }

   toSignUpPage(){  
    this.router.navigate(['sign-up']);
    }
  
    toLoginPage(){
    this.router.navigate(['login']);
    }

    toAllUsersPage(){
      this.router.navigate(['all-users']);
    }
  
    isLoggedInUser()
    {
      return localStorage.getItem("userIdLogin")!=null;
    }

    logOut()
    {
      localStorage.clear();
    }
    topFeedbacks(userId:Number){
      this.userToTOP=userId;
          this.router.navigate(['top-feedbacks',{"userToTOP": this.userToTOP}]);
          console.log("the id:" +this.userToTOP)
    }
}
