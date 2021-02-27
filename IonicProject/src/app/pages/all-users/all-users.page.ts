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
  ans:boolean 
  constructor(public httpClient: HttpClient, private router: Router,private permissionService: PermissionsService,private userService:UserService, private userBlockedService: UserBlockedService,  private alertController: AlertController) { }
  selectedUser:User=new User();
  selectedUserId: Number;
  //userLogedIn:User=new User();
  userLogedInId: Number=+localStorage.getItem('userIdLogin')


  ngOnInit() {
    this.userService.GetUser(this.userLogedInId).subscribe((res:User)=>{this.user=res;
    },err=>console.error(err))

    this.getAllUsers()
   

  }

  toHomePage(){
    this.router.navigate(['home'])
  }
  

  getAllUsers(){
    this.userService.getAllUsers().subscribe(u=>{
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
  let alertInputs=[];
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


 blockUser(fromUserId: number){ 
  this.userBlocked.BlockedUserId=fromUserId;
  this.userBlocked.UserId=+localStorage.getItem('userIdLogin');
  this.userBlocked.IsBlocked=true;

    this.userBlockedService.blockUser(this.userBlocked).subscribe(res=>{
      console.log("the res: "+ res);
    })
  }

  checkUserBlock(idUB:Number){
    console.log("theeeeee   "+idUB)
    this.userBlockedService.checkUserBlock(idUB).subscribe(res=>{
      this.ans=res
      console.log("the ans "+ this.ans)
    })
    // if(this.ans== true)
    // return true;
    // else false;
  }

}
