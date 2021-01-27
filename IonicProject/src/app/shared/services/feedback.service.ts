import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Feedback } from '../models/feedback.model';

@Injectable({
  providedIn: 'root'
})
export class FeedbackService {

  constructor(private http:HttpClient) { }


  addFeedback(feedback: Feedback):Observable<Boolean>{
    return this.http.post<boolean>(environment.url + 'feedback/createFeedback',feedback);
    
  }
  
  deleteFeedback(idFeedback:number):Observable<Boolean>{
    return this.http.post<boolean>(environment.url + 'feedback/deleteFeedback', idFeedback);
  }
   getAllFeedbacksByUser(userId:Number):Observable<Feedback[]>{ 
    //debugger;
   return this.http.get<Feedback[]>(environment.url + `feedback/getAllFeedbackByUser/${userId}`);
  } 

  GetListfeedbackByUser(userId:Number):Observable<Feedback[]>{ 
    //debugger;
   return this.http.get<Feedback[]>(environment.url + `feedback/GetListfeedbackByUser/${userId}`);
  } 
  

  getNameUserToFeedback(userId:Number):Observable<string>{
      return this.http.get<string>(environment.url+`feedback/getNameUserToFeedback/${userId}`);
  }


  readFeeback(idFeedback:Number, FromUserId:Number):Observable<Boolean>{
    return this.http.post<boolean>(environment.url + `feedback/readFeeback/${idFeedback}`, FromUserId);
  }

  getAllFeedbacksTop(userId:Number):Observable<Feedback[]>{
    return this.http.get<Feedback[]>(environment.url+ `feedback/getAllFeedbacksTop/${userId}`);
  }
 
}
