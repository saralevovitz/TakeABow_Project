import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-my-account',
  templateUrl: './my-account.page.html',
  styleUrls: ['./my-account.page.scss'],
})
export class MyAccountPage implements OnInit {

  constructor(private router: Router) { }

  addFeedback(){
    this.router.navigate(['new-feedback']);
  }

  toMyFeedbacks(){
    this.router.navigate(['my-feedbacks']);
  }

  toMyDetails(){
    this.router.navigate(['my-details']);
  }

  toMyInvitations(){
    this.router.navigate(['my-invitations']);
  }

  exit(){
    alert('Are you sure you want to exit?');
  }
  toHomePage(){
    this.router.navigate(['home']);
  }
  ngOnInit() {
  }

}
