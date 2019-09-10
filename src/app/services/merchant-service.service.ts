import { Injectable } from '@angular/core';
import { getAllLifecycleHooks } from '@angular/compiler/src/lifecycle_reflector';

@Injectable({
  providedIn: 'root'
})
export class MerchantServiceService {

  constructor() { }
  static merchantId:number

  getAllMerchantsProduct(merchantId:number){
    let url = "http://localhost:4200/merchant/"
  }
  
}
