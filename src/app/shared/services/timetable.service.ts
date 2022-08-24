import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs';

@Injectable({
    providedIn: 'root'
  })

export class TimeService {

constructor(private http: HttpClient) {}
    postDashEvent(data) {
      return this.http.post<any>('https://localhost:7196/api/dashSidebardetails',{
          date: data.date,
          title: data.title,
          details: data.details,
      })
      .pipe(map((res:any)=>{
        return res;
      }))
    }


    getDashEvent() {
      return this.http.get<any>('https://localhost:7196/api/dashSidebardetails')
      .pipe(map((res:any)=>{
        return res;
      }))
    }

    getTeacherTimeTable(id) {
      return this.http.get<any>(`https://localhost:7196/api/TimeTable/TeacherTimeTable/${id}`)
    .pipe(map((res:any)=>{
      console.log(res);
      return res
    }))
    }


    getStudentTimeTable(id) {
      return this.http.get<any>(`https://localhost:7196/api/TimeTable/${id}`)
    .pipe(map((res:any)=>{
      return res
    }))
    }

    getMasterTimetable() {
      return this.http.get<any>('https://localhost:7196/api/TimeTable/')
    .pipe(map((res:any)=>{
      console.log(res);
      
      return res
    }))
    }




} 