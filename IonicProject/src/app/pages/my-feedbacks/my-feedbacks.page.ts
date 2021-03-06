import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Feedback } from 'src/app/shared/models/feedback.model';
import { UsersBlocked } from 'src/app/shared/models/userBlocked.model';
import { FeedbackService } from 'src/app/shared/services/feedback.service';
import { UserBlockedService } from 'src/app/shared/services/user-blocked.service';
import { UserService } from 'src/app/shared/services/user.service';

@Component({
  selector: 'app-my-feedbacks',
  templateUrl: './my-feedbacks.page.html',
  styleUrls: ['./my-feedbacks.page.scss'],
})
export class MyFeedbacksPage implements OnInit {

  constructor(private router: Router, private feedbackService: FeedbackService, private location: Location,
  private  userService:UserService) { }

  feedbacksList: Feedback[]=[]
  feedback: Feedback= new Feedback();
    idF:Number;
  
   ngOnInit() {
    this.feedback.ToUserId=+localStorage.getItem('userIdLogin')
    console.log("to user:"+this.feedback.ToUserId)
    this.feedbackService.getAllFeedbacksByUser(this.feedback.ToUserId).subscribe(f=>{
      this.feedbacksList=f
      console.log(f)
    })
  }

  tomyHomePage(){
    this.router.navigate(['home']);
  }


  backToPage(){
    this.location.back();
  }
  
  toDeleteFeedback(idf:number){
   console.log(idf )
    this.feedbackService.deleteFeedback(idf).subscribe(res=>{
      if(res==true)
      alert('הפידבק נמחק בהצלחה')
     else alert('שגיאה, הפידבק לא נמחק')})
   
  }


  readFeedback(idFeedback:Number, FromUserId:Number){
    console.log(idFeedback)
    this.feedbackService.readFeeback(idFeedback, FromUserId).subscribe(res=>{
      if(res==true)
      alert('הפידבק נקרא')
     else alert('הפידבק לא נקרא')})
  }


 
    
 
}
