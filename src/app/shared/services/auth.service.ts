import { Auth, signInWithEmailAndPassword,authState } from '@angular/fire/auth';
//import { Auth } from './../../../../node_modules/@firebase/auth/dist/esm2017/src/model/public_types.d';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { CommonService } from './common.service';
import { environment } from 'src/environments/environment';
import { from } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  currentUser$ = authState(this.auth);
  //private readonly API_URL = environment.baseUrl;
  constructor(public http: HttpClient,public commonService:CommonService , private auth: Auth ) { }

  login(username: string, password: string){
    return from(signInWithEmailAndPassword(this.auth, username, password))
  }

  logout(){
    return from(this.auth.signOut());
  }


  // check(arg){
  //   console.log(arg)
  // }

  // login(email: string, password: string , subUnitId : number , subUnitName : string) {
  //   const headers = new HttpHeaders().set('content-type', 'application/json');
  //   const data = {
  //     UserName: email,
  //     UserPass: password
  //   };
  //   return this.http.post<any>(this.API_URL + 'signin', JSON.stringify(data), {
  //     headers
  //   }).pipe(map(user => {
  //     if (user) {
  //       localStorage.setItem('currentUser', JSON.stringify(user.data));
  //       console.log(user.data);
        
  //       this.commonService.nextCurrentUser(user.data);
  //     } else { this.logout(); }

  //     return user;
  //   }));
  // }
  // logout() {
  //   localStorage.removeItem('currentUser');
  //   localStorage.removeItem('remember');
  //   this.commonService.nextCurrentUser(null);
  // }
  // resetPassword(email: string) {
  //   const headers = new HttpHeaders().set('content-type', 'application/json');
  //   const data = {
  //     UserEmail: email
  //   };
  //   return this.http.post<any>(this.API_URL + 'ComUserPasswordReset', data, {headers});
  // }
 
}
