import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MerchantComponent } from './merchant/merchant.component';
import { MerchantOperationsComponent } from './merchant/merchant-operations/merchant-operations.component';
import { MerchantProfileComponent } from './merchant/merchant-profile/merchant-profile.component';
import { AddProductComponent } from './merchant/merchant-operations/add-product/add-product.component';
import { RemoveProductComponent } from './merchant/merchant-operations/remove-product/remove-product.component';
import { ShowAllProductsComponent } from './merchant/merchant-operations/show-all-products/show-all-products.component';


const routes: Routes = [
  { path: '', redirectTo: 'merchant', pathMatch: 'full' },
  { path: 'merchant', component:MerchantComponent 
    // children:[{
    //   path:'merchantOperations' , component:MerchantOperationsComponent 
    // }]  
  },
  { path:'merchant/merchantOperations' , component:MerchantOperationsComponent},
  { path:'merchant/merchantProfile' , component:MerchantProfileComponent},
  { path:'merchant/merchantOperations/addProduct' , component:AddProductComponent},
  { path:'merchant/merchantOperations/removeProduct' , component:RemoveProductComponent},
  { path:'merchant/merchantOperations/displayProducts' , component:ShowAllProductsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
