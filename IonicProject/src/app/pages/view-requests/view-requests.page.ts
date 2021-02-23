import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { Permissions } from 'src/app/shared/models/permissions.model';
import { PermissionsService } from 'src/app/shared/services/permissions.service';

@Component({
  selector: 'app-view-requests',
  templateUrl: './view-requests.page.html',
  styleUrls: ['./view-requests.page.scss'],
})
export class ViewRequestsPage implements OnInit {

  constructor(private router: Router, private permissionsService: PermissionsService, private alertController: AlertController) { }
  permission:Permissions= new Permissions()
 toPermission:number
  permissionList: Permissions[]=[]
  pOk: boolean

 
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
  var alert = await this.alertController.create(
    {
    cssClass: 'my-custom-class',
    header: 'אישור הזמנה',
    buttons: 
    [
      {
        text: 'אשר',
        role: 'cancel',
        cssClass: 'secondary',
        handler: () => {
          this.permission.IsAllow=true;
          this.permission.Id= idPermission;
          this.permission.UserId=+localStorage.getItem('userIdLogin');
          this.permission.WatchUserId=fromUser;
          this.permissionsService.IsAllowPermission(this.permission).subscribe(res=>
          
            console.log("res:"+ res))
        }
      }, 
      {
        text: 'דחה',
        handler: () => 
        {
          this.permission.IsAllow=false
          this.permission.Id= idPermission;
          this.permission.UserId=+localStorage.getItem('userIdLogin');
          this.permission.WatchUserId=fromUser;
          this.permissionsService.IsAllowPermission(this.permission).subscribe(res=>
          console.log("res:"+ res))
        }
      }
    ]
  });
   await alert.present();
 }


 
}

