import { Component, NgZone } from '@angular/core';

import { AlertController, Platform } from '@ionic/angular';
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
    public userService: UserService,
    public feedbackService:FeedbackService,
    public permissionsService:PermissionsService,
    private alertController: AlertController,
    private zone:NgZone
  ) {
    this.initializeApp();
  }
  user:User=new User();
  idU: Number=+localStorage.getItem('userIdLogin')
  ans: boolean
 
  amountFeedback: Number;
  amountViewRequest:Number;
  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    
    });
   if(this.idU!=null&&this.idU>0)
    this.userService.GetUser(this.idU).subscribe((res:User)=>{
    this.userService.user=res
    },err=>console.error(err))
    this.amountFeedbacks()
    this.amountViewRequests()
    
  }


  amountFeedbacks(){
    this.feedbackService.amountFeedbacks(this.idU).subscribe((res:Number)=>{
    //this.feedbackService.feedback=res
      this.amountFeedback=res;
      
   })
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
      this.router.navigate(['home']);
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
   
   async AlertExit()
    {
       var alert = await this.alertController.create(
    {
    cssClass: 'my-custom-class',
    header: 'אתה בטוח??',
    buttons: 
    [
      {
        text: 'אישור',
        cssClass: 'secondary',
        handler: () => {
       this.user.Id=+localStorage.getItem('userIdLogin')
        this.user.Is_Deleted=true
        this.userService.UpDate(this.user).subscribe(res=>
        { 
          this.ans=res;
         this.exit();

        }
         )}
        
      }, 
      {
        text: 'ביטול',
        handler: () => 
        { }
      }
    ]
  });
   await alert.present();
   if(this.ans==true){
 //לסגור את האפליקציה סופית
   }
   else{
     //להודיע שהיציאה נכשלה
   }
 
 }
    addFeedback(){
      this.router.navigate(['new-feedback']);
    }
  
    toMyFeedbacks(){
      this.router.navigate(['my-feedbacks']);
    }
  
    
  
    amountViewRequests(){
      console.log(this.idU)
      this.permissionsService.amountViewRequests(this.idU).subscribe(res=>{
      this.permissionsService.permission= res;
      this.amountViewRequest=res
      })  
      console.log("the amountViewRequest: "+ this.amountViewRequest)
    }
  
    exit(){
    localStorage.clear();
    this.router.navigate(['home']);
    }

    backToPage()
    {

    }
}
