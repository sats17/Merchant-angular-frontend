import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MerchantComponent } from './merchant/merchant.component';
import { MerchantOperationsComponent } from './merchant/merchant-operations/merchant-operations.component';
import { MerchantProfileComponent } from './merchant/merchant-profile/merchant-profile.component';

@NgModule({
  declarations: [
    AppComponent,
    MerchantComponent,
    MerchantOperationsComponent,
    MerchantProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
