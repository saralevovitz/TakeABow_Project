import { Location } from '@angular/common';
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

  constructor(private router: Router, private feedbackService: FeedbackService, private location: Location) { }
  
  feedbacksList: Feedback[]=[]
  feedback: Feedback= new Feedback();

  ngOnInit() {
    this.feedback.FromUserId=+localStorage.getItem('userIdLogin')
    this.feedbackService.GetListfeedbackByUser(this.feedback.FromUserId).subscribe(f=>{
      this.feedbacksList=f
      
      console.log(this.feedbacksList)
     
    })
  }

  toHomePage(){
    this.router.navigate(['home']);
  }
  
  backToPage(){
    this.location.back();
  }
}
