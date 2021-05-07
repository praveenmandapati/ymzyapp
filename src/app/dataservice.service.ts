
import { Injectable } from '@angular/core';
import { Observable, } from 'rxjs';
import { HttpClient, HttpHeaders, } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class DataserviceService {

  headers = new HttpHeaders().set('Content-Type', 'application/json');

  constructor(private http: HttpClient) { }

  create(data: any): Observable<any> {
    return this.http.post<any>('https://common.laalsa.com/support/support/credentials/login', data,
      { observe: 'response' as 'body' });
  }



  getdata(): Observable<any> {
    this.headers = new HttpHeaders(
      {
        "X-access-token": "" + localStorage.getItem("x-access-token:")
      }
    );
    return this.http.get('https://common.laalsa.com/support/support/crm/detailedOrderDetails?orderId=da325a38-4a6c-4783-8ba8-d3c35e0dbaa0',
      { headers: this.headers }
    );
  }





}
