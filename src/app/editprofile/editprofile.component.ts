import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Login } from '../login/login';


@Component({
  selector: 'app-editprofile',
  templateUrl: './editprofile.component.html',
  styleUrls: ['./editprofile.component.css']
})
export class EditprofileComponent implements OnInit {

  Customer_Id:string;
  Name:string;
  Age:number;
  Mobile:string;
  Gender:string;
  City:string;
  Address:string;
  constructor(private _xyz:LoginService,private _route:Router,private _acroute:ActivatedRoute) { }

  onSave(){
    this._xyz.updateCustomer(new Login(this.Customer_Id,this.Name,this.Mobile,this.Age,this.Gender,this.City,this.Address)).subscribe(
      (data:any)=>{
        alert("Successfully Updated");
        this._route.navigate(['/viewproduct']);
      }
    )
  }

  ngOnInit() {

    this.Customer_Id=localStorage.getItem('id');
    // this.x=this._acroute.snapshot.params['Email'];
    this._xyz.getCustomerById(this.Customer_Id).subscribe(
      (data:Login[])=>{
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
}
