import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Login } from './login/login';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private url='http://localhost:3000/Customer/';


  constructor(private _http:HttpClient) { }

  getLoginById(item:Login){
    let body=JSON.stringify(item);
    let head1=new HttpHeaders().set('Content-Type', 'application/json');
    return this._http.post(this.url+item.Customer_Id, body, {headers: head1});
  }
  getCustomerById(Customer_Id:string){
    return this._http.get(this.url+Customer_Id);
  }
  updateCustomer(item:Login){
    let body=JSON.stringify(item);
    let head1=new HttpHeaders().set('Content-Type', 'application/json');
    return this._http.put(this.url+item.Customer_Id, body, {headers: head1});
  }
  addCustomer(item:Login){
    let body=JSON.stringify(item);
    let head1=new HttpHeaders().set('Content-Type', 'application/json');
    return this._http.post(this.url, body, {headers: head1});
  }
  changePasssword(item:Login){
    let body=JSON.stringify(item);
    let head1=new HttpHeaders().set('Content-Type', 'application/json');
    return this._http.put(this.url, body, {headers: head1});
  }
}
