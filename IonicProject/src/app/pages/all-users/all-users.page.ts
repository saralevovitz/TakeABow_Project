import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { User } from 'src/app/shared/models/user.model';
import { UsersBlocked } from 'src/app/shared/models/userBlocked.model';
import { UserBlockedService } from 'src/app/shared/services/user-blocked.service';
import { UserService } from 'src/app/shared/services/user.service';
import { Permissions } from 'src/app/shared/models/permissions.model';
import { PermissionsService } from 'src/app/shared/services/permissions.service';
import { Location } from '@angular/common';


@Component({
  selector: 'app-all-users',
  templateUrl: './all-users.page.html',
  styleUrls: ['./all-users.page.scss'],
})
export class AllUsersPage implements OnInit {

  AllUsersList: User []= []
  sortedUserList:User[]=[]
  user:User=new User();
  userBlocked: UsersBlocked= new UsersBlocked(); 
  sendToId: any[]
  permission: Permissions= new Permissions();
  ans:Boolean = false
  selectedUser:User=new User();
  selectedUserId: Number;
  userLogedInId: Number=+localStorage.getItem('userIdLogin')
   answ:Boolean

  constructor(public httpClient: HttpClient, private router: Router,private permissionService: PermissionsService,private userService:UserService, private userBlockedService: UserBlockedService,  private alertController: AlertController, private location: Location) { }

  ngOnInit() {
    this.userService.GetUser(this.userLogedInId).subscribe((res:User)=>{this.user=res;
    },err=>console.error(err))

    this.getAllUsers()
  }

  backToPage(){
    this.location.back();
  }

  toHomePage(){
    this.router.navigate(['home'])
  }
  
  getAllUsers(){
    this.userService.getAllUsers(this.userLogedInId).subscribe(u=>{
      console.log(u)
      this.AllUsersList=u
      this.sortedUserList=u
    })
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
 }

 async AlertView(toUser: number)
 {
   console.log("the idPermission: "+ toUser)
  var alert = await this.alertController.create(
    {
    cssClass: 'my-custom-class',
    header: 'שליחת בקשת צפיה',  
    buttons: 
    [
      {
        text: 'שלח',
        role: 'cancel',
        cssClass: 'secondary',
        handler: () => {
          this.permission.UserId=toUser
          this.permission.WatchUserId=+localStorage.getItem('userIdLogin')
          this.permissionService.sendPermission(this.permission).subscribe(res=>{
            if(res==true)
           console.log("ok")
           else
           console.log("error")
        });
      },
    },
     {
      text: 'ביטול',
      handler: () => {}, 
    }
    ]
  });
   await alert.present();
 }


 async AlertBlockUser(userId: number)
 {
  var alertBlockUser = await this.alertController.create(
    {
    cssClass: 'my-custom-class',
    header: 'אתה בטוח שברצונך לחסום את המשתמש?',  
    buttons: 
    [
      {
        text: 'כן',
        cssClass: 'secondary',
        handler: () => {
        this.userBlocked.BlockedUserId=userId;
        this.userBlocked.UserId=+localStorage.getItem('userIdLogin');
        this.userBlocked.IsBlocked=true;
        this.userBlockedService.blockUser(this.userBlocked).subscribe(res=>{
        this.answ=res})
        console.log("jiji"+ this.userBlocked.IsBlocked)
      },
    },
     {
      text: 'לא',
      handler: () => {}, 
    }
    ]
  });
   await alertBlockUser.present();
 }
   

 async AlertOpenUser(userId: number)
 {
  var alertOpenUser = await this.alertController.create(
    {
    cssClass: 'my-custom-class',
    header: 'אתה בטוח שברצונך לפתוח את חסימת המשתמש',  
    buttons: 
    [
      {
        text: 'כן',
        cssClass: 'secondary',
        handler: () => {
        this.userBlocked.BlockedUserId=userId;
        this.userBlocked.UserId=+localStorage.getItem('userIdLogin');
        this.userBlockedService.openkUser(this.userBlocked).subscribe(res=>{
        this.answ=res})

      },
    },
     {
      text: 'לא',
      handler: () => {}, 
    }
    ]
  });
   await alertOpenUser.present();
 }


}
