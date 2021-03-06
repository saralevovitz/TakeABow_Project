import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Feedback } from 'src/app/shared/models/feedback.model';
import { FeedbackService } from 'src/app/shared/services/feedback.service';
import { UserService } from 'src/app/shared/services/user.service';

@Component({
  selector: 'app-top-feedbacks',
  templateUrl: './top-feedbacks.page.html',
  styleUrls: ['./top-feedbacks.page.scss'],
})
export class TopFeedbacksPage implements OnInit {

  constructor(private router: Router, private feedbackService: FeedbackService ,private route: ActivatedRoute, private location: Location,private userService:UserService) { }
  
  feedbacksList: Feedback[]=[];
  
  nameUserF: String;
  ToUserId:Number
  ngOnInit() {

  this.feedbackByUser()
  this.getFeedback()
  this.nameUser()
  }

 
  toHomePage(){
    this.router.navigate(['home']);
  }


  feedbackByUser(){
    this.route.params.subscribe(params=>{
      this.ToUserId=params['userToTOP'];
    }) 
    console.log("the id:"+this.ToUserId)
  }


  getFeedback(){
    //console.log("the feedback "+this.feedback.FromUserId)
    this.feedbackService.getAllFeedbacksTop(this.ToUserId).subscribe(f=>{
      this.feedbacksList=f
     
    })
    console.log("the feedbacklist:"+this.feedbacksList)
  }

  nameUser(){
    this.feedbackService.getNameUserToFeedback(this.ToUserId).subscribe(res=>{
      this.nameUserF=res;
        })
  }


  backToPage(){
    this.location.back();
  }
}
