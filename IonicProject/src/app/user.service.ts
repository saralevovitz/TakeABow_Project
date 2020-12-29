import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from './user';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { } 

  
  func(user:User):Observable<boolean>{
     debugger;
        return this.http.post<boolean>(environment.url + 'user/createUser',user);
   }


  GetUser(userId:Number):Observable<User>
  {
      return this.http.get<User>(environment.url + `user/GetUserById/${userId}`)
  }
}
