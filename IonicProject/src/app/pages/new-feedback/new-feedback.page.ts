import { getLocaleFirstDayOfWeek } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgModel, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Feedback } from 'src/app/feedback';
import { FeedbackService } from 'src/app/feedback.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable} from 'rxjs/internal/Observable';



@Component({
  selector: 'app-new-feedback',
  templateUrl: './new-feedback.page.html',
  styleUrls: ['./new-feedback.page.scss'],
})
export class NewFeedbackPage implements OnInit {

  feedback: Feedback = new Feedback();
  res: Observable<any>;

  constructor(public httpClient: HttpClient, private router: Router,private feedbackService:FeedbackService) { }

  ngOnInit() {}

  // Http Options
  httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}

  //לחבר לסי שארפ- הוספת פידבק
  sendFeedback(){
     this.res = this.httpClient.post('http://localhost:63522/api/feedback/createFeedback',JSON.stringify(this.feedback),this.httpOptions);
     this.res.subscribe(data=>{
       console.log('my-data: ', data);
     })
  }

  toHomePage(){
    this.router.navigate(['home']);
  }
  

}
