import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Feedback } from '../models/feedback.model';

@Injectable({
  providedIn: 'root'
})
export class FeedbackService {

  constructor(private http:HttpClient) { }

//   getAllFeedbacks():Observable<boolean>{
//    debugger;
//    return this.http.get<Feedback>(environment.url + `user/GetUserById/${userId}`);


//  } 

  
  //  func(feedback:Feedback):Observable<boolean>{
  //      return this.http.post<boolean>("http://localhost:63522/api/feedback/createFeedback", feedback);
  //  }‏
}
