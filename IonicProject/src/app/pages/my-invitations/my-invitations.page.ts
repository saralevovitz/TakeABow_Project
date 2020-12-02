import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/user.service';

@Component({
  selector: 'app-my-invitations',
  templateUrl: './my-invitations.page.html',
  styleUrls: ['./my-invitations.page.scss'],
})
export class MyInvitationsPage implements OnInit {

  constructor(private router: Router,private userService:UserService) { }


  toHomePage(){
    this.router.navigate(['home']);
  }

  ngOnInit() {
  }

}
