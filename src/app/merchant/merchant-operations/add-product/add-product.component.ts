import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  addProductForm: FormGroup;
  submitted = false;
  categories: string[] = ['Mobiles', 'Computers', 'Health' , 'Beauty'];
  default: string = this.categories[0];

  constructor(private formBuilder: FormBuilder) { 
    this.formBuilder = formBuilder;
  }

  ngOnInit() {
    this.addProductForm = this.formBuilder.group({
      productName : ['', [Validators.required]],
      productDescription :  ['', [Validators.required]],
      productPrice: ['',[Validators.required,Validators.pattern('[+]?\\d*\\.?\\d+')]],
      productDiscount: ['',[Validators.required,Validators.pattern('[+]?\\d*\\.?\\d+')]],
      categories : ['', [Validators.required]],
    })
    this.addProductForm.controls['categories'].setValue(this.default, {onlySelf: true});
   
  }

  get f() { return this.addProductForm.controls; }

  onSubmit(){
    this.submitted = true;
    console.log("working onsubmuit")
    if(this.addProductForm.invalid){
      console.log("working invalid")
      return;
    }
    
    console.log(this.addProductForm.get('categories').value);
  }

}
