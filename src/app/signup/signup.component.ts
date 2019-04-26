import { Component, OnInit } from '@angular/core';
import { SignupService } from '../signup.service';
import { Router } from '@angular/router';
import { Signup } from './signup';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  arr:Signup[]=[];

  Customer_Id:string;
  Name:string;
  Password:string;
  Age:number;
  Mobile:string;
  Gender:string;
  City:string;
  Address:string;
  constructor(private _xyz:SignupService,private _route:Router) { }

  onAdd(){
    this._xyz.addCustomer(new Signup(this.Customer_Id,this.Name,this.Password,this.Age,this.Mobile,this.Gender,this.City,this.Address)).subscribe(
    (data:any)=>{
      console.log(data);
      this.arr.push(new Signup(this.Customer_Id,this.Name,this.Password,this.Age,this.Mobile,this.Gender,this.City,this.Address));
    }
    );
    this._route.navigate(['/']);

  }
  onCancel(){
    this._route.navigate([''])
  }

  ngOnInit() {
  }

}
