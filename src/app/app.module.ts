import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MerchantComponent } from './merchant/merchant.component';
import { MerchantOperationsComponent } from './merchant/merchant-operations/merchant-operations.component';
import { MerchantProfileComponent } from './merchant/merchant-profile/merchant-profile.component';
import { AddProductComponent } from './merchant/merchant-operations/add-product/add-product.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MerchantServiceService } from './services/merchant-service.service';

@NgModule({
  declarations: [
    AppComponent,
    MerchantComponent,
    MerchantOperationsComponent,
    MerchantProfileComponent,
    AddProductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [MerchantServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
