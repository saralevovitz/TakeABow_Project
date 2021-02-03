import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

import { Permissions } from '../models/permissions.model';

@Injectable({
  providedIn: 'root'
})
export class PermissionsService {

  constructor(private http: HttpClient) { }

  sendPermission(permission: Permissions ):Observable<Boolean>{
    return this.http.post<Boolean>(environment.url + 'permissions/ViewConfirmation',permission);
  }

  viewPermission(toPermission: number):Observable<Permissions[]>{
    return this.http.get<Permissions[]>(environment.url + `permissions/getAllPermissions/${toPermission}`);
  }

  IsAllowPermission(permission: Permissions ):Observable<Boolean>{
    return this.http.post<Boolean>(environment.url + 'permissions/IsAllowPermission',permission);

  }
  listInvitation(WatchUserId: Number){
    return this.http.get<Permissions[]>(environment.url + `permissions/getlistInvitation/${WatchUserId}`);
  }
}
