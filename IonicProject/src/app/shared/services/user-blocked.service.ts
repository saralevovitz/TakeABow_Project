import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { UsersBlocked } from '../models/userBlocked.model';

@Injectable({
  providedIn: 'root'
})
export class UserBlockedService {

  constructor(private http: HttpClient) { }


  blockUser(userBlocked: UsersBlocked):Observable<boolean>{
    return this.http.post<boolean>(environment.url + 'UsersBlocked/BlockUser', userBlocked);
  }


  openkUser(userBlocked: UsersBlocked):Observable<boolean>{
    debugger
    return this.http.post<boolean>(environment.url + 'UsersBlocked/OpenUser', userBlocked);
  }

  // checkUserBlock(myId: Number ,userId:Number):Observable<boolean>{
  //   return this.http.post<boolean>(environment.url+`UsersBlocked/checkUserBlock/${myId}`, userId);
  // }
}


