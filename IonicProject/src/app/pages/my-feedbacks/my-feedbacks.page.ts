import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Feedback } from 'src/app/shared/models/feedback.model';
import { FeedbackService } from 'src/app/shared/services/feedback.service';

@Component({
  selector: 'app-my-feedbacks',
  templateUrl: './my-feedbacks.page.html',
  styleUrls: ['./my-feedbacks.page.scss'],
})
export class MyFeedbacksPage implements OnInit {

  constructor(private router: Router, private feedbackService: FeedbackService) { }

  feedbacksList: Feedback[]=[]
  feedback: Feedback= new Feedback();
    idF:Number;
  tomyAccountPage(){
    this.router.navigate(['my-account']);
  }

   ngOnInit() {
   
    this.feedback.ToUserId=+localStorage.getItem('userIdLogin')
    console.log("to user:"+this.feedback.ToUserId)
    this.feedbackService.getAllFeedbacksByUser(this.feedback.ToUserId).subscribe(f=>{
      this.feedbacksList=f
      console.log(f)
     
    })
    // console.log("from user:"+this.feedback.FromUserId)

    // this.feedbackService.getNameUserToFeedback(this.feedback.FromUserId).subscribe(res=>
    //   this.feedback.FromUserFullName=res)
    // console.log(this.feedback.FromUserFullName)
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
