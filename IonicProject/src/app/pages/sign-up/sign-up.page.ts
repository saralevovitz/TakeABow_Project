import { getLocaleFirstDayOfWeek, Location } from '@angular/common';
import { Component, NgModule, OnInit } from '@angular/core';
import {  FormControl, FormGroup, NgModel, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/shared/models/user.model';
import { UserService } from 'src/app/shared/services/user.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.page.html',
  styleUrls: ['./sign-up.page.scss'],
})
export class SignUpPage implements OnInit {
  user: User = new User();


constructor(public httpClient: HttpClient, private router: Router,private userService:UserService, private location: Location) { }

ngOnInit() {
 ///this.user.Gender="m";
}

toHomePage(){
    this.router.navigate(['home']);
}

// Http Options
httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}


signUp(){
  debugger
  if(this.user.Password!=this.user.Password2)
  {
     alert("הסיסמא לא זהה")
     //לנקות את השדות של הסיסמא
     return false;
  }
  else{
    this.userService.createUser(this.user).subscribe(res=>{
        this.user.Id=res
    })
     console.log("the ans"+this.user.Id)
     // debugger;
      if(!this.user.Id)
      {
         alert("נוספת בהצלחה למערכת, שם המשתמש נשלח לכתובת המייל שלך")
         
 
      }
      else{
        alert("שגיאה, נסה להרשם שוב")
      }
  }
  
  
  
  }
  login(){
  this.router.navigate(['login']);
}
backToPage(){
  this.location.back();
}

}





