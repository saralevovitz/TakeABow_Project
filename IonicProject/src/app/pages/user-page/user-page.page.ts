import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/shared/models/user.model';
import { UserService } from 'src/app/shared/services/user.service';

@Component({
  selector: 'app-user-page',
  templateUrl: './user-page.page.html',
  styleUrls: ['./user-page.page.scss'],
})
export class UserPagePage implements OnInit {

  user:User=new User();
  userId:Number;
  constructor(private router:Router, private route:ActivatedRoute, private userService: UserService) { }

  ngOnInit() {
    this.showUserDetails();
    this.getUser(this.userId)

      
  }

  
  showUserDetails(){
    this.route.params.subscribe(params=>{
      this.userId=params['selectedUserId'];
    }) 
    console.log("the id:"+this.userId)
 
  }


  getUser(userId:Number){
    this.userService.GetUser(this.userId).subscribe(res=>{
      this.user=res
     console.log(this.user.FirstName)

    })
  this.user
  console.log(this.user.LastName)

  }



}
