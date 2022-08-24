
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { pipe } from 'rxjs';
import {map} from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  constructor(private http: HttpClient) {
    
   }

  

PostSubjects(data : any){
    console.log(data,"ashce");
    // console.log(typeof(parseInt(data.year)),"ashce");
    return this.http.post<any>('https://localhost:7196/api/subjectinfo', {
      subjectId: "kiccu nai",
      subjectName: data.subject,
      year:data.year,
      subSubject: data.subSubject,

    })
    .pipe(map((res:any)=>{
      return res;
    }))
  }

getSubjects() {
  return this.http.get<any>('https://localhost:7196/api/subjectinfo')
  .pipe(map((res:any)=>{
    return res;
  }))
}






}