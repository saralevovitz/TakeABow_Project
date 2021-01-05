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
   user:User=new User();
   id:Number=1934
   id2:number
   toHomePage(){
    this.router.navigate(['home']);
  }

  onClickEdit(){

  }
  
  ngOnInit() {
  //   let u:User=new User();
  // localStorage.setItem("key",JSON.stringify(u)) 
  //  u=JSON.parse(localStorage.getItem("key"))
   localStorage.setItem('userId',this.id.toString())
   this.id2 =+ localStorage.getItem('userId')
    console.log(this.id2)
  }


 getDetails(){
  this.userService.GetUser(this.id).subscribe(res=>{this.user=res})
}
}
