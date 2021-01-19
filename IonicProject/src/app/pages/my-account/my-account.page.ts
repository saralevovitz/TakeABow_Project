import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/shared/models/user.model';
import { UserService } from 'src/app/shared/services/user.service';

@Component({
  selector: 'app-my-account',
  templateUrl: './my-account.page.html',
  styleUrls: ['./my-account.page.scss'],
})
export class MyAccountPage implements OnInit {

  constructor(private router: Router, private userService: UserService) { }
  user:User=new User();
  idU: Number=+localStorage.getItem('userIdLogin')

  ngOnInit() {

    this.userService.GetUser(this.idU).subscribe((res:User)=>{this.user=res;
    },err=>console.error(err))
  }

  toListFeedbacks(){
    this.router.navigate(['list-feedback']);
  }

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
  
  toView(){
    this.router.navigate(['view-requests']);

  }
}
