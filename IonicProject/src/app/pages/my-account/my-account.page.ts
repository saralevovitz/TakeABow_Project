import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Feedback } from 'src/app/shared/models/feedback.model';
import { User } from 'src/app/shared/models/user.model';
import { FeedbackService } from 'src/app/shared/services/feedback.service';
import { PermissionsService } from 'src/app/shared/services/permissions.service';
import { UserService } from 'src/app/shared/services/user.service';

@Component({
  selector: 'app-my-account',
  templateUrl: './my-account.page.html',
  styleUrls: ['./my-account.page.scss'],
})
export class MyAccountPage implements OnInit {

  constructor(private router: Router, private userService: UserService, private feedbackService:FeedbackService, private permissionsService:PermissionsService) { }
  user:User=new User();
  idU: Number=+localStorage.getItem('userIdLogin')
  
  amountFeedback: Number;
  amountViewRequest:Number;

  ngOnInit() {

    this.userService.GetUser(this.idU).subscribe((res:User)=>{this.user=res;
    },err=>console.error(err))
    this.amountFeedbacks()
    this.amountViewRequests()
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

  toMyDetails(){
    this.router.navigate(['my-details']);
  }

  toMyInvitations(){
    this.router.navigate(['my-invitations']);
  }

  exit(){
    localStorage.clear();
    this.router.navigate(['home']);
   // alert('Are you sure you want to exit?');
  }

  toHomePage(){
    this.router.navigate(['home']);
  }
  
  toView(){
    this.router.navigate(['view-requests']);
  }

  amountFeedbacks(){
    this.feedbackService.amountFeedbacks(this.idU).subscribe(res=>{
      this.amountFeedback=res;
     // console.log("the mone: "+this.amountFeedbacks);
    })
  }

  amountViewRequests(){
    console.log(this.idU)
    this.permissionsService.amountViewRequests(this.idU).subscribe(res=>{
    this.amountViewRequest= res;
  
    })  
    console.log("the amountViewRequest: "+ this.amountViewRequest)
  }
  
}
