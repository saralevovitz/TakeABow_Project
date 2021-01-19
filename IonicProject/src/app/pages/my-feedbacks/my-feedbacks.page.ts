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
  nameUser:String;
  idF:Number;
  tomyAccountPage(){
    this.router.navigate(['my-account']);
  }

   ngOnInit() {
    this.feedback.FromUserId=+localStorage.getItem('userIdLogin')
    this.feedbackService.getAllFeedbacksByUser(this.feedback.FromUserId).subscribe(f=>{
      this.feedbacksList=f
      console.log(f)
    })

    this.feedbackService.getNameUserToFeedback(this.feedback.FromUserId).subscribe(res=>
      this.nameUser=res)
    console.log(this.nameUser)
  }

  toDeleteFeedback(idf:number){
  
console.log(idf )
    this.feedbackService.deleteFeedback(idf).subscribe(res=>{
      if(res==true)
      alert('true')
     else alert('false')})
   
  }
  readFeedback(idFeedback:Number, FromUserId:Number){
    console.log(idFeedback)
    this.feedbackService.readFeeback(idFeedback, FromUserId).subscribe(res=>{
      if(res==true)
      alert('true')
     else alert('false')})
  }

    
 
}
