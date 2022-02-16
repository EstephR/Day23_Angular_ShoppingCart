import { Injectable } from '@angular/core';
import { IAnimals } from './dataInterfaceAnimals';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cartItems: IAnimals[] = [];

  constructor() { }

  addToCart(animal: IAnimals) {
    this.cartItems.push(animal);
  }

  getAnimals(){
    return this.cartItems;
  }

  clearCart() {
    //Empty the array
    this.cartItems = [];
    return this.cartItems;
  }
}
