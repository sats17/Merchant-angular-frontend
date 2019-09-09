import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MerchantComponent } from './merchant/merchant.component';
import { MerchantOperationsComponent } from './merchant/merchant-operations/merchant-operations.component';
import { MerchantProfileComponent } from './merchant/merchant-profile/merchant-profile.component';
import { AddProductComponent } from './merchant/merchant-operations/add-product/add-product.component';


const routes: Routes = [
  { path: '', redirectTo: 'merchant', pathMatch: 'full' },
  { path: 'merchant', component:MerchantComponent 
    // children:[{
    //   path:'merchantOperations' , component:MerchantOperationsComponent 
    // }]  
  },
  { path:'merchant/merchantOperations' , component:MerchantOperationsComponent},
  { path:'merchant/merchantProfile' , component:MerchantProfileComponent},
  { path:'merchant/merchantOperations/addProduct' , component:AddProductComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
