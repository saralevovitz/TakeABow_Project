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

  constructor(public httpClient: HttpClient, private router: Router,private userService:UserService) { }

  ngOnInit() {
    this.getAllUsers()
    //console.log('saraaaa')
  }

  toHomePage(){
    this.router.navigate(['home'])
  }
  toUserPage(user_id:number){
    this.router.navigate(['user-page'])
  }
  getAllUsers(){
    this.userService.getAllUsers().subscribe(u=>{
      //console.log(u)
      this.AllUsersList=u
    })
 }

}
