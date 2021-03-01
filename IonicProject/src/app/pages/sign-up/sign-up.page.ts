import { getLocaleFirstDayOfWeek } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {  FormControl, FormGroup, NgModel, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/shared/models/user.model';
import { UserService } from 'src/app/shared/services/user.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable} from 'rxjs/internal/Observable';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.page.html',
  styleUrls: ['./sign-up.page.scss'],
})
export class SignUpPage implements OnInit {
  user: User = new User();
  
  res: Observable<any>;

constructor(public httpClient: HttpClient, private router: Router,private userService:UserService) { }

ngOnInit() {
 this.user.Gender="m";
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
  this.res = this.httpClient.post('http://localhost:63522/api/user/createUser', JSON.stringify(this.user),this.httpOptions);
  this.res.subscribe(userId => {
    localStorage.setItem('userId', userId)//שומר את הידיץ
  })
  alert("השם משתמש נשלח למייל")

}



} 
