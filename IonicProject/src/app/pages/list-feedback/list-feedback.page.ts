import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-feedback',
  templateUrl: './list-feedback.page.html',
  styleUrls: ['./list-feedback.page.scss'],
})
export class ListFeedbackPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  tomyAccountPage(){
    this.router.navigate(['my-account']);
  }
  toHomePage(){
    this.router.navigate(['home']);
  }

}
