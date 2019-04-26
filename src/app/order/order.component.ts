import { Component, OnInit } from '@angular/core';
import { Signup } from '../signup/signup';
import { product } from '../viewproduct/product';
import { ord } from '../order/order';
import { ProductService } from '../product.service';
import { SignupService } from '../signup.service';
import { Router,ActivatedRoute } from '@angular/router';
import { OrderService } from '../order.service';
import { LoginService } from '../login.service';
import { Login } from '../login/login';


@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {
  Customer_Id:string;
  Name:string;
  Product_Id:number;
  Product_Name:string;
  Price:number;
  qty1:number;
  FKCat_Id:number;
  arr:Signup[];
  product:product[];

  Address:string;

  arr1:ord[]=[];
  Order_Id:number=20;
  Qty:number;

  price1:number;
  Mfg:string;
  Color:string;
  Desc:string;
  customer:Login[]=[];
  date:string="2018-07-07 12:14:58";

  constructor(private _loginservice:LoginService,private _abc:Router,private _sign:SignupService,private _product:ProductService,private _active:ActivatedRoute,private _xyz:OrderService) { }

  ngOnInit() {

    this.Customer_Id=localStorage.getItem('id');
    this.Product_Id = this._active.snapshot.params['Product_Id'];

    this._product.getProById(this.Product_Id).subscribe(
      (data: product[]) => {

        this.product = data;
        this.Product_Name = data[0].Product_Name;
        this.Mfg = data[0].Mfg;
        this.Qty = data[0].Stock;
        this.Color = data[0].Color;
        this.Price = data[0].Price;
        this.Desc = data[0].Desc;
        this.FKCat_Id=data[0].FKCat_Id;
        this._loginservice.getCustomerById(this.Customer_Id).subscribe(
          (data:any)=>{
            this.customer=data;
          }
        );
    }
  );


}

    Placeorder(){
       this._xyz.addCustomer(new ord(this.date,this.Order_Id,this.Price,this.Customer_Id,this.Product_Id)).subscribe(
          (data:any)=>{
            console.log(data);
            this.arr1.push(new ord(this.date,this.Order_Id,this.Price,this.Customer_Id,this.Product_Id));

                  alert("SUCCESFULLY ORDER");
                  this._abc.navigate(['/viewproduct',this.Product_Id]);


          }
        );
  }


}

