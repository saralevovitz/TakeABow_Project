import { getLocaleFirstDayOfWeek } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {  FormControl, FormGroup, NgModel, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/user';
import { UserService } from 'src/app/user.service';
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
  //this.userService.func(this.user);
  this.res = this.httpClient.post('http://localhost:63522/api/user/createUser', JSON.stringify(this.user),this.httpOptions);
  this.res
  .subscribe(data => {
    console.log('my data: ', data);
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
