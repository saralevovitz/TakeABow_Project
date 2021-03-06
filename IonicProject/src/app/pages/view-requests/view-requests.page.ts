import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { Permissions } from 'src/app/shared/models/permissions.model';
import { PermissionsService } from 'src/app/shared/services/permissions.service';
import { UserService } from 'src/app/shared/services/user.service';

@Component({
  selector: 'app-view-requests',
  templateUrl: './view-requests.page.html',
  styleUrls: ['./view-requests.page.scss'],
})
export class ViewRequestsPage implements OnInit {

  constructor(private router: Router, private permissionsService: PermissionsService, private alertController: AlertController,
     private location: Location,private userService:UserService) { }
  permission:Permissions= new Permissions()
  toPermission:number
  permissionList: Permissions[]=[]
  pOk: boolean
  time:Number
  viewResult:boolean
 
  ngOnInit() {
    this.toPermission=+localStorage.getItem('userIdLogin');
    this.view()
  }


  toHomePage(){
    this.router.navigate(['home']);
  }

 view(){
   this.permissionsService.viewPermission(this.toPermission).subscribe(res=>{
     this.permissionList=res
   })

 }

 async AlertView(fromUser: Number, idPermission:Number)
 {
   console.log("the idP: "+ fromUser)

  var expireTimeAlert = await this.alertController.create(
  {
  cssClass: 'my-custom-class',
  header: 'אישור הזמנה',
  inputs: [
    {
      label: 'שבוע',
      name: 'week',
      type: 'radio',
      value:'7',
      placeholder: 'Placeholder 1'
    },
    {
      label: 'חודש',
      name: 'month',
      type: 'radio',
      value: '30',
      placeholder: 'Placeholder 2'
    },
    {
      label: 'שנה',
      name: 'year',
      type: 'radio',
      value: '356',
      placeholder: 'Placeholder 3'
    }
  ],
  buttons:[
    {
      text: 'אשר',             
              cssClass: 'secondary',
              handler: (alertData) => {
                this.permission.IsAllow=true;
                this.permission.Id= idPermission;
                this.permission.UserId=+localStorage.getItem('userIdLogin');
                this.permission.WatchUserId=fromUser;
                this.time=alertData;
           
             //  this.permission.ExpireDate=Date.now()+alertData;
             
                this.permissionsService.IsAllowPermission(this.time,this.permission).subscribe(viewResult=>
                console.log("res:"+ viewResult))
              }
    }
  ]

});
 await expireTimeAlert.present();
}


backToPage(){
  this.location.back();
}
 
}

