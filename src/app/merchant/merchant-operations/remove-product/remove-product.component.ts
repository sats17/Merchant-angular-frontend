import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-remove-product',
  templateUrl: './remove-product.component.html',
  styleUrls: ['./remove-product.component.css']
})
export class RemoveProductComponent implements OnInit {

  removeProductForm : FormGroup
  constructor(private formBuilder:FormBuilder) { 
    this.formBuilder = formBuilder;
  }

  ngOnInit() {
    this.removeProductForm = this.formBuilder.group({
      productId : ['', [Validators.required]]
    })
  }

  get f() { return this.removeProductForm.controls; }

  onSubmit() {
    if(this.removeProductForm.invalid){
      return;
    }
  }

}
