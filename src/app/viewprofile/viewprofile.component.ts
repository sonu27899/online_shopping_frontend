import { Component, OnInit } from '@angular/core';
import { Login } from '../login/login';
import {  LoginService } from '../login.service';
import { Router,ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-viewprofile',
  templateUrl: './viewprofile.component.html',
  styleUrls: ['./viewprofile.component.css']
})
export class ViewprofileComponent implements OnInit {

  Customer_Id:string;
  Name:string;
  Age:number;
  Mobile:string;
  Gender:string;
  City:string;
  Address:string;
  arr:Login[]=[];

  constructor(private _route:Router,private _ser:LoginService,private _acroute:ActivatedRoute) { }

  onEdit(){
    this._route.navigate(['editprofile']);
  }

  ngOnInit() {

    this.Customer_Id=localStorage.getItem('id');
    // this.Email=this._acroute.snapshot.params['Email'];
    this._ser.getCustomerById(this.Customer_Id).subscribe(
    (data:Login[])=>{
      this.arr=data;
      this.Customer_Id=data[0].Customer_Id;
      this.Name=data[0].Name;
      this.Age=data[0].Age;
      this.Mobile=data[0].Mobile;
      this.Gender=data[0].Gender;
      this.City=data[0].City;
      this.Address=data[0].Address;
    }
  );
}

onChange(){
  this._route.navigate(['ChangePassword',]);
}
onLogOut(){
  this._route.navigate(['']);
  localStorage.clear();
}

}
