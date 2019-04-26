import { Component, OnInit } from '@angular/core';
import { product } from './product';
import { Router } from '@angular/router';
import { Category } from './category';
import { Cat_Pro } from './cat_pro';
import { ProductService } from '../product.service';


@Component({
  selector: 'app-viewproduct',
  templateUrl: './viewproduct.component.html',
  styleUrls: ['./viewproduct.component.css']
})
export class ViewproductComponent implements OnInit {
  cat_arr:Category[]=[];
  pro_arr:product[]=[];
  cat_pro_arr:Cat_Pro[]=[];
  arr:product[]=[];

  constructor(private _abc:Router,private _xyz:ProductService) { }

  onclickcat(Cat_Id:number)
{
this._xyz.getProByCat(Cat_Id).subscribe(
  (data:product[])=>
  {
    this.pro_arr=data;

  }
);
}
onlclickpro(Product_Id:number)
{
this._xyz.getProById(Product_Id).subscribe(
  (data:product[])=>
  {
  this._abc.navigate(['/viewproduct',Product_Id]);
  }
);
}


  ngOnInit() {
    this._xyz.getAllCategory().subscribe(
      (data:Category[])=>{

        this.cat_arr=data;
      }
    );
    this._xyz.getAllProduct().subscribe(
      (data:product[])=>
      {
        this.pro_arr=data;
      }
    );
  }

}
