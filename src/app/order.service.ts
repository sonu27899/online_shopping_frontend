import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { ord } from './order/order';
import { myord } from './order/orderdetails';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  url:string='http://localhost:3000/order/';
  url1:string='http://localhost:3000/myorder/';
  constructor(private _http:HttpClient) { }
  addCustomer(item:ord){
    let _abc=new HttpHeaders().set('Content-Type','application/json');
    let body=JSON.stringify(item);
    return this._http.post(this.url,body,{headers:_abc});
  }
  orderByCustomerId(Customer_Id){
    return this._http.get(this.url1+Customer_Id);
  }
}
