import { getLocaleFirstDayOfWeek } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgModel, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Feedback } from 'src/app/shared/models/feedback.model';
import { FeedbackService } from 'src/app/shared/services/feedback.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';



@Component({
  selector: 'app-new-feedback',
  templateUrl: './new-feedback.page.html',
  styleUrls: ['./new-feedback.page.scss'],
})
export class NewFeedbackPage implements OnInit {

  

  constructor(public httpClient: HttpClient, private router: Router,private feedbackService:FeedbackService) { }

  idU: number=+localStorage.getItem('userIdLogin')
  feedback: Feedback = new Feedback();
  sendTo: String
  
  ngOnInit() {}

  // Http Options
  httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}

  AddFeedback(){
    //לעשות בדיקה מה הכניס, שם משתמש או מייל


    this.feedback.FromUserId=this.idU
     this.feedbackService.addFeedback(this.feedback).subscribe(res=>{
       if(res==true)
        alert('הפידבק נשלח בהצלחה')
      else  alert('שגיאה, נסה שוב')})
       
     
   }

  toHomePage(){
    this.router.navigate(['home']);
  }
  

}
