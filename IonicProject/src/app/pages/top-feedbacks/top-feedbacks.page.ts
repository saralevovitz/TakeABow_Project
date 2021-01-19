import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Feedback } from 'src/app/shared/models/feedback.model';
import { FeedbackService } from 'src/app/shared/services/feedback.service';

@Component({
  selector: 'app-top-feedbacks',
  templateUrl: './top-feedbacks.page.html',
  styleUrls: ['./top-feedbacks.page.scss'],
})
export class TopFeedbacksPage implements OnInit {

  constructor(private router: Router, private feedbackService: FeedbackService ,private route: ActivatedRoute) { }
  
  feedbacksList: Feedback[]=[];
  feedback: Feedback= new Feedback();
  nameUserF: String;

  ngOnInit() {

  this.feedbackByUser()
  this.getFeedback()
  this.nameUser()
  }

  tomyAccountPage(){
    this.router.navigate(['my-account']);
  }


  feedbackByUser(){
    this.route.params.subscribe(params=>{
      this.feedback.ToUserId=params['userToTOP'];
    }) 
    console.log("the id:"+this.feedback.ToUserId)
  }


  getFeedback(){
    //console.log("the feedback "+this.feedback.FromUserId)
    this.feedbackService.getAllFeedbacksTop(this.feedback.ToUserId).subscribe(f=>{
      this.feedbacksList=f
     
    })
    console.log("the feedbacklist:"+this.feedbacksList)
  }

  nameUser(){
    this.feedbackService.getNameUserToFeedback(this.feedback.ToUserId).subscribe(res=>{
      this.nameUserF=res;
        })
  }



}
