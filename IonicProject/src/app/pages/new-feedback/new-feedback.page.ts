import { getLocaleFirstDayOfWeek, Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Feedback } from 'src/app/shared/models/feedback.model';
import { FeedbackService } from 'src/app/shared/services/feedback.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from 'src/app/shared/models/user.model';
import { UserService } from 'src/app/shared/services/user.service';
import { NgModel } from '@angular/forms';

@Component({
  selector: 'app-new-feedback',
  templateUrl: './new-feedback.page.html',
  styleUrls: ['./new-feedback.page.scss'],
})
export class NewFeedbackPage implements OnInit {

constructor(public httpClient: HttpClient, private router: Router,private userService: UserService,  private feedbackService:FeedbackService, private location: Location) { }

  idU: number=+localStorage.getItem('userIdLogin')
  feedback: Feedback = new Feedback();
  send: string
  AllUsersList: User []= []
  sortedUserList:User[]=[]
  userLogedInId: Number=+localStorage.getItem('userIdLogin')
  ngOnInit() {



    this.userService.getAllUsers(this.userLogedInId).subscribe(u=>{
      console.log(u)
      this.AllUsersList=u
      this.sortedUserList=u
    })
  }
  // Http Options
  httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })

}

  AddFeedback(sendTo: string){
    
    console.log("ngMOdel "+sendTo)
   
   debugger
     this.feedback.FromUserId=this.idU
    this.feedbackService.addFeedback(this.send, this.feedback).subscribe(res=>{
       if(res==true)
        alert('הפידבק נשלח בהצלחה')
      else  alert('שגיאה, נסה שוב')})
   
  }

  toHomePage(){
    this.router.navigate(['home']);
  }

  backToPage(){
    this.location.back();
  }
  sortUserList(s:string)
  {
   
    s=s.toLowerCase();
    this.sortedUserList=[];
    for(let u of this.AllUsersList)
    {
      if(u.Email.toLowerCase().indexOf(s)!=-1||
      u.Id.toString().indexOf(s)!=-1||
      u.Email.indexOf(s)!=-1)
        this.sortedUserList.push(u);
    }
    this.send=s
this.AddFeedback(this.send)
   
  }  

}
