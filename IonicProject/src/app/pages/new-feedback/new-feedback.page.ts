import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-feedback',
  templateUrl: './new-feedback.page.html',
  styleUrls: ['./new-feedback.page.scss'],
})
export class NewFeedbackPage implements OnInit {

  constructor(private router: Router) { }

  //לחבר לסי שארפ- הוספת פידבק
  sendFeedback(){
  }

  toHomePage(){
    this.router.navigate(['home']);
  }
  ngOnInit() {
  }

}
