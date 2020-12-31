import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/shared/services/user.service';
import { User } from 'src/app/shared/models/user.model';

@Component({
  selector: 'app-my-details',
  templateUrl: './my-details.page.html',
  styleUrls: ['./my-details.page.scss'],
})
export class MyDetailsPage implements OnInit {

  constructor(public httpClient: HttpClient, private router: Router,private userService:UserService) { }
   user:User
   id:Number
  
   toHomePage(){
    this.router.navigate(['home']);
  }

  onClickEdit(){

  }
  
  ngOnInit() {
  //localStorage.setItem()  
   // this.id =+ localStorage.getItem('userId')
    console.log(this.getDetails())
  }


 getDetails(){
  this.userService.GetUser(this.id).subscribe(res=>{this.user=res})
}
}
