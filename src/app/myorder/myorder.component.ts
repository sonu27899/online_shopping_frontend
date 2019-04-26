import { Component, OnInit } from '@angular/core';
import { Signup } from '../signup/signup'
import { product } from '../viewproduct/product';
import { ord } from '../order/order';
import { ProductService } from '../product.service';
import { SignupService } from '../signup.service';
import { Router,ActivatedRoute } from '@angular/router';
import { OrderService } from '../order.service';
import { myord } from '../order/orderdetails';

@Component({
  selector: 'app-myorder',
  templateUrl: './myorder.component.html',
  styleUrls: ['./myorder.component.css']
})
export class MyorderComponent implements OnInit {

Customer_Id:string;
Msg:string;
Status:string;
arr:myord[]=[];
  constructor(private _abc:OrderService) { }

  ngOnInit() {
    this.Customer_Id=localStorage.getItem('id');

    this._abc.orderByCustomerId(this.Customer_Id).subscribe(
      (data:myord[])=>
      {
        this.arr=data;
        this.Status=data[0].Status;
        console.log(this.Status);

      }
    );

  }

}
