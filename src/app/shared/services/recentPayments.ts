import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class recentPayments {

  constructor(private http: HttpClient) { }

  getRecentPayments() {
      return this.http.get<any>('assets/recentPayments.json')
          .toPromise()
          .then(res => res.data)
          .then(data => { return data; });
  }
}
