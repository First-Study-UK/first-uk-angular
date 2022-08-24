import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable , Subject} from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CommonService {
  messages: '';
  currentUsers: any;
  private readonly API_URL = environment.baseUrl;
  currentUser: BehaviorSubject<any>;
  message: BehaviorSubject<String>;
  constructor(public http: HttpClient ) { 
    this.currentUser = new BehaviorSubject(this.currentUsers);
    this.message = new BehaviorSubject(this.messages);
  }
  nextCurrentUser(data){
    this.currentUser.next(data);
  }
  nextmessage(data) {
    this.message.next(data);
  }
  private _refreshNeed$ = new Subject<void>();
  get refreshNeed$(){
    return this._refreshNeed$;
  }

  getUserInfos(search: string) {
    const data = {
      Search: search
    };
    const headers = new HttpHeaders().set('content-type', 'application/json');
    // return this.http.post<any[]>(this.API_URL + 'UserInfos', data, {headers});
    return this.http.get<any[]>(this.API_URL + 'UsersInfos');
  }
  
}
