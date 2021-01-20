import { NUMBER_TYPE } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Permissions } from 'src/app/shared/models/permissions.model';
import { PermissionsService } from 'src/app/shared/services/permissions.service';




@Component({
  selector: 'app-my-invitations',
  templateUrl: './my-invitations.page.html',
  styleUrls: ['./my-invitations.page.scss'],
})
export class MyInvitationsPage implements OnInit {

  constructor(private router: Router, private permissionService: PermissionsService) { }

  //ToUserId: Number;
 // FromUserId:Number;
 permission:Permissions=new Permissions();

 

  tomyAccountPage(){
    this.router.navigate(['my-account']);
  }

  ngOnInit() {
    this.permission.UserId=+localStorage.getItem('userIdLogin');
   
  }

  send(){
  // this.FromUserId=+localStorage.getItem('userIdLogin');
   
 console.log("from"+ this.permission.UserId)
 console.log("to"+ this.permission.WatchUserId)

   this.permissionService.sendPermission(this.permission).subscribe(res=>{
     if(res==true)
     alert('true')
    else alert('false')})
  //  this.router.navigate(['my-account']);
  }
}


