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
  user:User=new User();

  isLoggedInUser(){
    return localStorage.getItem("userIdLogin")!=null;
  }
 UpDate(user:User):Observable<boolean>{
      return this.http.post<boolean>(environment.url + 'user/updateUser',user);
 }

 getAllUsers(userLogedInId:Number):Observable<User[]>{
  return this.http.get<User[]>(environment.url + `user/getAllUsers/${userLogedInId}`);
 }

 createUser(user:User):Observable<Number>{
     return this.http.post<Number>(environment.url + 'user/createUser',user);
  }

 GetUser(userId:Number):Observable<User>
 {
     return this.http.get<User>(environment.url + `user/GetUserById/${userId}`);   
 }

 getTopUsers():Observable<User[]>
 {
   return this.http.get<User[]>(environment.url + `user/getTopUsers/${2}`);
 }


 checkLogin(user:User):Observable<Boolean>{
   debugger;
   return this.http.post<boolean>(environment.url + 'user/login',user);

 }
}
