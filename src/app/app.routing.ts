import { Routes,RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { ViewproductComponent } from './viewproduct/viewproduct.component';
import { ViewprofileComponent } from './viewprofile/viewprofile.component';
import { EditprofileComponent } from './editprofile/editprofile.component';
import { ProductdescComponent } from './productdesc/productdesc.component';
import { MyorderComponent } from './myorder/myorder.component';
import { OrderComponent } from './order/order.component';

const arr:Routes=[
  {path:'',component:LoginComponent},
  {path:'signup',component:SignupComponent},
  {path:'viewproduct',component:ViewproductComponent},
  {path:'editprofile',component:EditprofileComponent},
  {path:'viewprofile',component:ViewprofileComponent},
  {path:'viewproduct/:Id',component:ProductdescComponent},
  {path:'myorder',component:MyorderComponent},
  {path:'order/:Customer_Id',component:OrderComponent}
];

export const routing = RouterModule.forRoot(arr);
