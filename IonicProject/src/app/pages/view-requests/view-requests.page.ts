import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Permissions } from 'src/app/shared/models/permissions.model';
import { PermissionsService } from 'src/app/shared/services/permissions.service';

@Component({
  selector: 'app-view-requests',
  templateUrl: './view-requests.page.html',
  styleUrls: ['./view-requests.page.scss'],
})
export class ViewRequestsPage implements OnInit {

  constructor(private router: Router, private permissionsService: PermissionsService) { }

  permissionsList: Permissions[]=[];

  ngOnInit() {
    this.allRequests()
  }

  tomyAccountPage(){
    this.router.navigate(['my-account']);
  }


  allRequests(){

  }

}

