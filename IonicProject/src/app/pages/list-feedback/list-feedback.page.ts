import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Feedback } from 'src/app/shared/models/feedback.model';
import { FeedbackService } from 'src/app/shared/services/feedback.service';

@Component({
  selector: 'app-list-feedback',
  templateUrl: './list-feedback.page.html',
  styleUrls: ['./list-feedback.page.scss'],
})
export class ListFeedbackPage implements OnInit {

  constructor(private router: Router, private feedbackService: FeedbackService) { }
  
  feedbacksList: Feedback[]=[]
  feedback: Feedback= new Feedback();

  ngOnInit() {
    this.feedback.FromUserId=+localStorage.getItem('userIdLogin')
    this.feedbackService.GetListfeedbackByUser(this.feedback.FromUserId).subscribe(f=>{
      this.feedbacksList=f
      
      console.log(f)
     
    })
    // console.log("to"+this.feedback.ToUserId)

    // this.feedbackService.getNameUserToFeedback(this.feedback.ToUserId).subscribe(res=>
    //   this.feedback.ToUserFullName=res)
    // console.log("ToUserFullName"+this.feedback.ToUserFullName)
  }

  tomyAccountPage(){
    this.router.navigate(['my-account']);
  }
  toHomePage(){
    this.router.navigate(['home']);
  }

}
