



import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {pipe} from 'rxjs';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class StudentService {

constructor(private http: HttpClient) { }

// getlAllStudent() {
//       return this.http.get<any>('assets/student.json')
//           .toPromise()
//           .then(res => res.data)
//           .then(data => { return data});
//   }

getIndividualStudent(id:string) {
  console.log(id,"ind");
    return this.http.get<any>(`https://localhost:7196/api/studentinfo/${id}`)
        .toPromise()
        .then(res => {return res}
        )
}

PostStudentData(data , info){
  let datas = 
    {
      studentInfo: {
        studentId: data.studentId,
        fullName: data.fullname,
        "dateOfBirth": data.birthdate,
        "gender": data.gender.name,
        "mobileNumber": data.mobile,
        "email": data.email,
        "address": data.address,
        "city": data.street,
        "postCode": data.postcode,
        "enrolmentDate": data.enroldate,
        "year":data.yeargroup,
        "contactPerson1": data.contact1,
        "emailPerson1": data.emailp1,
        "mobilePerson1": data.mbl1,
        "contactPerson2":data.contact2,
        "emailPerson2": data.emailp2,
        "mobilePerson2": data.allergy,
        "allergies":  data.medical,
        "medicalDifficulties": data.learning,
        "learningDifficulties": data.learning,
        "studentImage": "string"
      },
      selectedSubject: info.map((item)=>item)
    }
  
console.log(datas);

  return this.http.post<any>('https://localhost:7196/api/studentinfo',datas )
  .pipe(map((res:any)=>{
    return res;
  }))
}
getlAllStudent(){
  return this.http.get<any>('https://localhost:7196/api/studentinfo')
  .pipe(map((res:any)=>{
    return res;
  }))
}
UpdateStudent(data) {
  return this.http.put<any>('https://localhost:7196/api/studentinfo', data)
  .pipe(map((res:any)=>{
    return res;
  }))
} 
DeleteStudent(id) {
  return this.http.delete<any>(`https://localhost:7196/api/studentinfo/${id}`)
  .pipe(map((res:any)=>{
    return res;
  }))
}

}



