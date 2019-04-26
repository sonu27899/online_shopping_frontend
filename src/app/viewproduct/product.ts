export class product{
  constructor(public Product_Id:number,
              public Product_Name:string,
              public Price:number,
              public Image:string,
              public Color:string,
              public Mfg:string,
              public Stock:number,
              public FKCat_Id:number,
              public Desc:string
              ){

  }
}
