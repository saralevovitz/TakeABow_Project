import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-my-feedbacks',
  templateUrl: './my-feedbacks.page.html',
  styleUrls: ['./my-feedbacks.page.scss'],
})
export class MyFeedbacksPage implements OnInit {

  constructor(private router: Router) { }

  toHomePage(){
    this.router.navigate(['home']);
  }

  ngOnInit() {
  }

}
