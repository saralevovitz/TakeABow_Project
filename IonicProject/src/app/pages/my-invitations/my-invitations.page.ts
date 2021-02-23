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
 
  permission: Permissions= new Permissions();
  permissionList: Permissions[]=[]


  toHomePage(){
    this.router.navigate(['home']);
  }

  ngOnInit() {
  this.permission.WatchUserId=+localStorage.getItem('userIdLogin');
  this.permission.IsAllow= null
  this.listInvitation()
  }

  listInvitation(){
     this.permissionService.listInvitation(this.permission.WatchUserId).subscribe(res=>{
     this.permissionList=res
     console.log("the per: "+ this.permissionList)
   })
  }

  viewFeedback(){
    
    this.router.navigate(['view-feedbacks']);
  }
}


