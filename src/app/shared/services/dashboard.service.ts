import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor( private http :HttpClient) { }

  getDashboardDues() {
    return this.http.get<any>('https://localhost:7196/api/dashSidebardetails/GetAllDashboardDues')
    .pipe(map((res:any)=>{
      return res;
    }))
  }

}
