import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Signup } from './signup/signup';

@Injectable({
  providedIn: 'root'
})
export class SignupService {
  private url = 'http://localhost:3000/Customer/';

  constructor(private _http:HttpClient) { }

  addCustomer(item: Signup) {
    const body = JSON.stringify(item);
    const head1 = new HttpHeaders().set('Content-Type', 'application/json');
    return this._http.post(this.url, body, {headers: head1});
  }
  getCustomer(c_id:string){

    return this._http.get(this.url+c_id);
  }
  updateCustomer(item:Signup,Customer_Id:string){
    let _abc=new HttpHeaders().set('Content-Type','application/json');
    let body=JSON.stringify(item);
    return this._http.put(this.url+Customer_Id,body,{headers:_abc});
  }
}
