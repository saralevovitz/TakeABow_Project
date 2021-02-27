import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Router } from '@angular/router';
import { User } from './shared/models/user.model';
import { UserService } from './shared/services/user.service';
import { FeedbackService } from './shared/services/feedback.service';
import { PermissionsService } from './shared/services/permissions.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private router:Router,
    private userService: UserService,
    private feedbackService:FeedbackService,
    private permissionsService:PermissionsService
  ) {
    this.initializeApp();
  }
  user:User=new User();
  idU: Number=+localStorage.getItem('userIdLogin')
  
  amountFeedback: Number;
  amountViewRequest:Number;
  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
   if(this.idU!=null&&this.idU>0)
    this.userService.GetUser(this.idU).subscribe((res:User)=>{this.user=res;
    },err=>console.error(err))
    this.amountFeedbacks()
    this.amountViewRequests()
    
  }

  toAllUsersPage(){
    this.router.navigate(['all-users']);
  }
  
  isLoggedInUser(){
    return localStorage.getItem("userIdLogin")!=null;
  }

  toHomePage(){
    this.router.navigate(['home']);
   }


    logOut(){
      localStorage.clear();
    }

    toView(){
      this.router.navigate(['view-requests']);
    }
  
    toMyDetails(){
      this.router.navigate(['my-details']);
    }
  
    toMyInvitations(){
      this.router.navigate(['my-invitations']);
    }

    toListFeedbacks(){
      this.router.navigate(['list-feedback']);
    }
  
    addFeedback(){
      this.router.navigate(['new-feedback']);
    }
  
    toMyFeedbacks(){
      this.router.navigate(['my-feedbacks']);
    }
  
    amountFeedbacks(){
      this.feedbackService.amountFeedbacks(this.idU).subscribe(res=>{
        this.amountFeedback=res;
     })
    }
  
    amountViewRequests(){
      console.log(this.idU)
      this.permissionsService.amountViewRequests(this.idU).subscribe(res=>{
      this.amountViewRequest= res;
    
      })  
      console.log("the amountViewRequest: "+ this.amountViewRequest)
    }
  
    exit(){
      localStorage.clear();
      this.router.navigate(['home']);
     // alert('Are you sure you want to exit?');
    }
}
