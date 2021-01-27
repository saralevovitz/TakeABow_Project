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
 

  tomyAccountPage(){
    this.router.navigate(['my-account']);
  }

  toHomePage(){
    this.router.navigate(['home']);
  }

  ngOnInit() {
  this.permission.WatchUserId=+localStorage.getItem('userIdLogin');
  }

  send(){
    this.permission.WatchUserId=+localStorage.getItem('userIdLogin');
   this.permissionService.sendPermission(this.permission).subscribe(res=>{
     if(res==true)
     alert('true')
     alert('false')})
    this.router.navigate(['my-account']);
  }
}


