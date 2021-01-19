import { getLocaleFirstDayOfWeek } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {  FormControl, FormGroup, NgModel, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/shared/models/user.model';
import { UserService } from 'src/app/shared/services/user.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable} from 'rxjs/internal/Observable';

//import { Observable} from 'rxjs/Observable';

//import { Observable } from '"../../../../node_modules/rxjs/Observable"';


@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.page.html',
  styleUrls: ['./sign-up.page.scss'],
})
export class SignUpPage implements OnInit {
  user: User = new User();
  
  res: Observable<any>;

constructor(public httpClient: HttpClient, private router: Router,private userService:UserService) { }

ngOnInit() {}

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
  //console.log(f)
  //this.userService.func(this.user);
  this.res = this.httpClient.post('http://localhost:63522/api/user/createUser', JSON.stringify(this.user),this.httpOptions);
  this.res.subscribe(userId => {
    localStorage.setItem('userId', userId)//שומר את הידיץ
    console.log('my-Id: ', userId);
  })
  // if(this.res){
  //   alert('User registered successfully');
  // }
  // else{
  //   alert('Registration failed');
  // }
}

toMyAccountPage(){
  this.router.navigate(['my-account']);
}

} 
