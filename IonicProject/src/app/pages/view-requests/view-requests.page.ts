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
  //pNo: boolean
 
  ngOnInit() {
    this.toPermission=+localStorage.getItem('userIdLogin');
    this.view()
  }

  tomyAccountPage(){
    this.router.navigate(['my-account']);
  }
  toHomePage(){
    this.router.navigate(['home']);
  }

 view(){
 
   this.permissionsService.viewPermission(this.toPermission).subscribe(res=>{
     this.permissionList=res
   })

 }

 async AlertView(idP: number)
 {
   console.log("the idP: "+ idP)
  var alert = await this.alertController.create(
    {
    cssClass: 'my-custom-class',
    header: 'אישור הזמנה',
    //inputs:alertInputs,
    buttons: 
    [
      {
        text: 'אשר',
        role: 'cancel',
        cssClass: 'secondary',
        handler: () => {
          this.permission.IsAllow=true;
          this.permission.Id= idP;
          this.permission.UserId=+localStorage.getItem('userIdLogin');
          this.permissionsService.IsAllowPermission(this.permission).subscribe(res=>
            console.log("res:"+ res))
        }
        
      }, 
      {
        text: 'דחה',
        handler: (alertData) => 
        {
          //console.log("alertData"+alertData)
          this.permission.IsAllow=false
          this.permission.UserId=+localStorage.getItem('userIdLogin');
          this.permissionsService.IsAllowPermission(this.permission).subscribe(res=>
            console.log("res:"+ res))


          //this.categoryProduct = alertData;
          //let p=new Products();
         // p.ProductName=this.nameProduct;
         // console.log(this.o[0][this.categoryProduct])
         // p.CategoryId=this.o[0][this.categoryProduct][0].CategoryId
        //  this.newProducts.push(p)
        }
      }
    ]
  });
  
  //console.log(alert.inputs.length)
  await alert.present();
 }

}

