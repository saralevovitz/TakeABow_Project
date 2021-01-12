import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }

 UpDate(user:User):Observable<boolean>{
    // debugger; 
      return this.http.post<boolean>(environment.url + 'user/updateUser',user);
 }


  func(user:User):Observable<boolean>{
   // debugger;
       return this.http.post<boolean>(environment.url + 'user/createUser',user);
  }


 GetUser(userId:Number):Observable<User>
 {
     return this.http.get<User>(environment.url + `user/GetUserById/${userId}`);
     
 }

 getTopUsers():Observable<User>
 {
   return this.http.get<User>(environment.url + `user/getTopUsers/${5}`);
 }


 checkLogin(user:User):Observable<Boolean>{
 //  debugger;
   return this.http.post<boolean>(environment.url + 'user/login',user);

 }
}
