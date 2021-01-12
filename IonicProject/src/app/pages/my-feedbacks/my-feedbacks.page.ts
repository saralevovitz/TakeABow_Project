import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Feedback } from 'src/app/shared/models/feedback.model';

@Component({
  selector: 'app-my-feedbacks',
  templateUrl: './my-feedbacks.page.html',
  styleUrls: ['./my-feedbacks.page.scss'],
})
export class MyFeedbacksPage implements OnInit {

  constructor(private router: Router) { }

  feedback: Feedback= new Feedback()
  
  toHomePage(){
    this.router.navigate(['home']);
  }

  toDeleteFeedback(){
    
  }

  ngOnInit() {
    this.feedback.ToUserId=+localStorage.getItem('userIdLogin')
    console.log(this.feedback.Feedback+"uygdrs")
  }

}
