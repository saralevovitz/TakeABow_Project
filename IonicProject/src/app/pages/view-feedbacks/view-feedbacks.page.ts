import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Feedback } from 'src/app/shared/models/feedback.model';
import { FeedbackService } from 'src/app/shared/services/feedback.service';
import { UserService } from 'src/app/shared/services/user.service';

@Component({
  selector: 'app-view-feedbacks',
  templateUrl: './view-feedbacks.page.html',
  styleUrls: ['./view-feedbacks.page.scss'],
})
export class ViewFeedbacksPage implements OnInit {

  
  feedbacksList: Feedback[]=[]
  feedback: Feedback= new Feedback();

  constructor(private router: Router, private feedbackService: FeedbackService, private location: Location, private userService:UserService) { }

  ngOnInit() {

    this.feedback.ToUserId=+localStorage.getItem('userIdLogin')
    console.log("to user:"+this.feedback.ToUserId)
    this.feedbackService.ViewAllFeedbacks(this.feedback.ToUserId).subscribe(f=>{
      this.feedbacksList=f
      console.log(f)
    })
 }


toHomePage(){
  this.router.navigate(['home']);
}


backToPage(){
  this.location.back();
}


}
