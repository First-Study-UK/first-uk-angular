import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { pipe } from 'rxjs';
import {map} from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class ExpenseService {

  constructor(private http: HttpClient) {
    
   }

  

   postExpense(data : any){
    console.log(data,"ashce");
    return this.http.post<any>('https://localhost:7196/api/expenseinfo', 
    {
      studentid: data.studentId,
      studentName: data.studentName,
      enrolmentDate:data.enrolmentDate,
      endDate: data.endDate,
      fees: data.fees,
      totalPayable: data.totalPayable,
      discount : data.discount ,
      paymentMethod :  data.paymentMethod.name,
      status:  data.status.name,
      invoiceId : data.invoiceId,
      note: data.Note 
    })
    .pipe(map((res:any)=>{
      return res;
    }))
  }

getExpense() {
  return this.http.get<any>('https://localhost:7196/api/expenseinfo')
  .pipe(map((res:any)=>{
    return res
  }))
}
}