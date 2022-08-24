


import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {pipe} from 'rxjs';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class TeacherService {
  url='http://localhost:4200/addteacher';
  constructor(private http: HttpClient) { }

  
  getAllteachers() {
    return this.http.get<any>('https://localhost:7196/api/teacherinfo')
    .pipe(map((res:any)=>{
     return res;
    }))
}
PostTeacherData(data,info) {
  console.log(info);
  
  let datas = {
    teacherInfo: {
      teacherId: data.teacherId,
      fullName: data.fullname,
      dateOfBirth: data.birthdate,
      gender: data.gender.name,
      mobileNumber: data.mobile,
      email: data.email,
      address: data.address,
      city: data.street,
      postCode: data.postcode,
      joiningDate: data.joiningdate,
      niNumber:data.niNumber,
      emergencyContact1: data.emergency1,
      email1: data.email1,
      number1: data.number1,
      relationship1:data.relation1,
      email2: data.email2,
      emergencyContact2: data.emergency2,
      number2:data.number2,
      relationship2: data.relation2,
      hourlyRate: data.hourlyRate,
      avgHour: data.avgHour,
      "teacherImage": "string"
    },
    selectedClass: info.map((item)=> (item)
    )
  }
    return this.http.post<any>('https://localhost:7196/api/teacherinfo', datas)
    .pipe(map((res:any)=>{
      return res;
    })) 
}
  UpdateTeacher(data) {
    return this.http.put<any>('https://localhost:7196/api/teacherinfo', data)
      .pipe(map((res:any)=>{
      return res;
  }))
} 
  DeleteTeacher(id: number) {
    return this.http.delete<any>('https://localhost:7196/api/teacherinfo'+ id)
      .pipe(map((res:any)=>{
      return res;
    }))
  }
  getIndividualTeacher(id) {
    return this.http.get<any>(`https://localhost:7196/api/teacherinfo/${id}`)
      .pipe(map((res:any)=>{
         return res;
    }))
  }
}