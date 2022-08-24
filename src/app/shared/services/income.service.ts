import { MessageService } from 'primeng/api';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class IncomeService {

  
 
  constructor(private http: HttpClient) { }
  message: string

  getIncome() {
      return this.http.get<any>('assets/income.json')
          .toPromise()
          .then(res =>  res.data )
          .then(data => { return data; });
  }
  
  setMessage(data){
    this.message="100";
    console.log("123")
  }

  getMessage(){
    
    return this.message; 
   }
}
