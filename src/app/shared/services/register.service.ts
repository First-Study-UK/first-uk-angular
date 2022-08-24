import { Attendance } from './../../modules/register/model/attendance';

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { pipe } from 'rxjs';
import {map} from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private http: HttpClient) {
    
   }

  

PostRegister(data : any){
    return this.http.post<any>('https://localhost:7196/api/registerinfo', data)
    .pipe(map((res:any)=>{
      return res;
    }))
  }

getRegister() {
  return this.http.get<any>('https://localhost:7196/api/registerinfo')
  .pipe(map((res:any)=>{
    return res;
  }))
}

getIndividualRegister(id) {
  return this.http.get<any>(`https://localhost:7196/api/registerinfo/StudentRegisterBy/${id}`)
  .pipe(map((res:any)=>{
    return res;
  }))
}

getIndividualTeacherRegister(id) {
  return this.http.get<any>(`https://localhost:7196/api/registerinfo/TeacherRegisterBy/${id}`)
  .pipe(map((res:any)=>{
    return res;
  }))
}



}