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
   user1:User=new User();
   id:number=1934
   page_title:string="הפרופיל שלי";
  
   idU: number=+localStorage.getItem('userIdLogin')


  
  toHomePage(){
    this.router.navigate(['home']);
  }
  ngOnInit() {
  //   let u:User=new User();
  // localStorage.setItem("key",JSON.stringify(u)) 
  //  u=JSON.parse(localStorage.getItem("key"))
console.log(this.page_title)

  this.userService.GetUser(this.idU).subscribe((res:User)=>{this.user=res;
  },err=>console.error(err))

   }

  onClickEdit(){
    this.userService.UpDate(this.user).subscribe()
    alert('העדכון נשמר')
    //this.router.navigate(['my-account']);
  }


}
