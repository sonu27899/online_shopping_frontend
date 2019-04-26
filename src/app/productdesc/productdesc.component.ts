import { Component, OnInit } from '@angular/core';
import { product } from '../viewproduct/product';
import { Cat_Pro } from '../viewproduct/Cat_Pro';
import { ActivatedRoute, Router,Params } from '@angular/router';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-productdesc',
  templateUrl: './productdesc.component.html',
  styleUrls: ['./productdesc.component.css']
})
export class ProductdescComponent implements OnInit {

  i: number;
  index: number;
  Product_Id: number;
  pro_arr: product[] = [];
  cat_pro_arr: Cat_Pro[] = [];
  cat_pro: Cat_Pro;
  Image: string;
  Product_Name: string;
  Mfg: string;
  Qty: number;
  Color: string;
  Price: number;
  Desc: string;
  FKCat_Id:number;

  onbuy(){

  }

  onlclickpro(Product_Id) {
    this.Product_Id = Product_Id;
   this._xyz.getProById(this.Product_Id).subscribe(
     (data: product[]) => {
       console.log(data);
       this.pro_arr = data;
       this.Image = data[0].Image;
       this.Product_Name = data[0].Product_Name;
       this.Mfg = data[0].Mfg;
       this.Qty = data[0].Stock;
       this.Color = data[0].Color;
       this.Price = data[0].Price;
       this.Desc = data[0].Desc;
       this.FKCat_Id=data[0].FKCat_Id;
       this._xyz.getProByCatId(this.FKCat_Id,this.Product_Id).subscribe(
         (data:product[]) => {
           this.pro_arr = data;
         }
       );
       }
    );
 }

  constructor(private _acroute:ActivatedRoute,private _xyz:ProductService,private _route:Router) { }

  ngOnInit() {
    this._acroute.params.subscribe(
      (x: Params) => {
        this.Product_Id = x['Id'];
      }
    );
    this._xyz.getProById(this.Product_Id).subscribe(
      (data: product[]) => {

        this.pro_arr = data;
        this.Image = data[0].Image;
        this.Product_Name = data[0].Product_Name;
        this.Mfg = data[0].Mfg;
        this.Qty = data[0].Stock;
        this.Color = data[0].Color;
        this.Price = data[0].Price;
        this.Desc = data[0].Desc;
        this.FKCat_Id=data[0].FKCat_Id;
        this._xyz.getProByCatId(this.FKCat_Id,this.Product_Id).subscribe(
          (data:product[]) => {
            this.pro_arr = data;
          }
        );


      }
    );
  }
  onAdd(Product_Id)
  {

        this._route.navigate(['/order',Product_Id]);
  }

}
