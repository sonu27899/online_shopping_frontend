export class myord{
    constructor(
    public Order_Id:number,
      public Status:string,
      public Date?:string,
      public Amount?:number,
    public FKCustomer_Id?:string,
    public FKProduct_Id?:number,
    public Product_Id?:number,
    public Product_Name?:string,
    public Price?:number,
    public Image?:string,
    public Color?:string,
    public Mfg?:string,
    public FKCategory_Id?:number,
    public Stock?:number,
    public Description?:string,
    public Customer_Id?:string,
    public Password?:string,
    public Name?:string,
    public Age?:number,
    public Mobile?:string,
    public City?:string,
    public Gender?:string,
    public Address?:string,
  )
    {
    }
  }
