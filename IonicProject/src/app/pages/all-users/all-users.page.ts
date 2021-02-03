import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/shared/models/user.model';
import { UserService } from 'src/app/shared/services/user.service';

@Component({
  selector: 'app-all-users',
  templateUrl: './all-users.page.html',
  styleUrls: ['./all-users.page.scss'],
})
export class AllUsersPage implements OnInit {

  AllUsersList: User []= []
  user:User=new User();
  selectedUser:User=new User();
  selectedUserId: Number;
  //userLogedIn:User=new User();
  userLogedInId: Number=+localStorage.getItem('userIdLogin')

  constructor(public httpClient: HttpClient, private router: Router,private userService:UserService) { }

  ngOnInit() {
    this.userService.GetUser(this.userLogedInId).subscribe((res:User)=>{this.user=res;
    },err=>console.error(err))

    this.getAllUsers()
    //console.log('saraaaa')
  }

  toHomePage(){
    this.router.navigate(['home'])
  }

  getAllUsers(){
    this.userService.getAllUsers().subscribe(u=>{
      //console.log(u)
      this.AllUsersList=u
    })
 }
 
 toUserPage(userId:Number){
      this.selectedUserId=userId;
      this.router.navigate(['user-page',{"selectedUserId": this.selectedUserId}]);
      console.log("the id:" +this.selectedUserId)
}

}
