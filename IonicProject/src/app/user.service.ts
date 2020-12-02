import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) {
    
   } 
  func(user:User):Observable<boolean>{
     debugger;
        return this.http.post<boolean>("http://localhost:63522/api/user/createUser",user);
   }
}
