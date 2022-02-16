import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { IAnimals } from '../dataInterfaceAnimals';
//Import Form Builder
import { Form, FormBuilder } from '@angular/forms';

@Component({
  selector: 'cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cartItems: IAnimals[] = [];
  checkOutForm = this.fb.group({
    name: "",
    mail:""
  })

  constructor(private cartService: CartService, private fb:FormBuilder) { }

  onSubmit(){
    console.warn("Your order has been submitted", this.checkOutForm.value);
    this.cartItems = this.cartService.clearCart();
    this.checkOutForm.reset();
  }

  ngOnInit(): void {
    this.cartItems = this.cartService.getAnimals();
  }

}
