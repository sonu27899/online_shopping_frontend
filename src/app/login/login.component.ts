import { Component, OnInit } from '@angular/core';
import { Login } from './login';
import { Router } from '@angular/router';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  Customer_Id:string;
  Password:string;

  onSignup(){
    this._route.navigate(['/signup']);
  }
  onForget(){
    this._route.navigate(['ForgetPassword']);
  }
  onLogin(){
    localStorage.setItem('id',this.Customer_Id);
    console.log(this.Customer_Id);
    console.log(this.Password);
    this._xyz.getLoginById(new Login(this.Customer_Id,this.Password)).subscribe(
      (data:Login[])=>{
        console.log(data);

        if(data.length==1){
          localStorage.setItem('id',this.Customer_Id);
          alert("Login Successfully");
          this._route.navigate(['viewproduct']);
        }
        else{
          alert("Email Or Password Incorrect");
        }
      }
    )
  }


  constructor(private _route:Router,private _xyz:LoginService) { }

  ngOnInit() {
  }

}
