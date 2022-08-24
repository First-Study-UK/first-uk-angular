import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { pipe } from 'rxjs';
import {map} from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class InvoiceService {

  constructor(private http: HttpClient) {
    
   }

  

PostInvoice(data : any){
    console.log(data,"ashce");
    return this.http.post<any>('https://localhost:7196/api/paymentinfo', 
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




getInvoice() {
  return this.http.get<any>('https://localhost:7196/api/paymentinfo')
  .pipe(map((res:any)=>{
    return res
  }))
}

getIndividualInvoice(id) {
  return this.http.get<any>(`https://localhost:7196/api/paymentinfo/Paymentinfoby${id}`)
  .pipe(map((res:any)=>{
    return res
  }))
}

getIndividualPaymentInvoice(id) {
  return this.http.get<any>(`https://localhost:7196/api/paymentinfo/Studentinfoby${id}`)
  .pipe(map((res:any)=>{
    return res
  }))
}

UpdateInvoice(data) {
    return this.http.put<any>('https://localhost:7196/api/paymentinfo', data)
    .pipe(map((res:any)=>{
      return res;
    }))
  } 
DeleteInvoice(id: number) {
    return this.http.delete<any>('https://localhost:7196/api/paymentinfo'+ id)
    .pipe(map((res:any)=>{
      return res;
    }))
  }

  getTotalIncome(data){
      return data  
  }



}


