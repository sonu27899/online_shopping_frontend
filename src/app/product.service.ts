import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { qty } from './viewproduct/qtyupdate';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

private url2:string='http://localhost:3000/category/';
private url3:string='http://localhost:3000/product/';
private url4:string='http://localhost:3000/catpro/';
changeqty:string='http://localhost:3000/checkqty/';


  constructor(private _http:HttpClient) { }

  getAllCategory()
  {
    return this._http.get(this.url2);
  }
  getAllProduct()
  {
    return this._http.get(this.url3);
  }
  getProByCat(Cat_Id)
  {
    return this._http.get(this.url3+Cat_Id);
  }
  getProById(Product_Id:number)
  {
    return this._http.get(this.url2+Product_Id);
  }
  getProByCatId(Cat_Id:number,Product_Id:number)
  {
    return this._http.get(this.url4 + Cat_Id + '/' + Product_Id);
  }
  checkQty(Product_Id:number){
    return this._http.get(this.changeqty + Product_Id);
  }
  updateqty(item:qty){
    let _abc=new HttpHeaders().set('Content-Type','application/json');
    let body=JSON.stringify(item);
    return this._http.put(this.changeqty,body,{headers:_abc});
  }
}
