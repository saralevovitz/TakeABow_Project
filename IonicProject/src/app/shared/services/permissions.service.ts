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

  sendPermission(userID:Number, watchUserId: Number ):Observable<Boolean>{
//debugg
    return this.http.post<Boolean>(environment.url + `permissions/ViewConfirmation/${userID}`, watchUserId);

  }
}
