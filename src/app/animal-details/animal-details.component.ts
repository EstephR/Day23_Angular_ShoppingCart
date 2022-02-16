import { Component, InjectableProvider, OnInit } from '@angular/core';
//Also import animals and Interface animals here, as well as Activated Route and Params from Angular Library
import { animals } from '../dataAnimals';
import { IAnimals } from '../dataInterfaceAnimals';
import { ActivatedRoute, Params } from '@angular/router';
//Import the Cart Service in order to use it
import { CartService } from '../cart.service';

@Component({
  selector: 'animal-details',
  templateUrl: './animal-details.component.html',
  styleUrls: ['./animal-details.component.css']
})
export class AnimalDetailsComponent implements OnInit {
  animal: IAnimals = {} as IAnimals;
  id: number = 0;

  //constructor needs to be injected with Activated route and Cart Service in order to use it
  constructor(private route: ActivatedRoute, private cartService: CartService) { }
  addToCart() {
    window.alert("Your partner in crime has been added to the cart")
    this.cartService.addToCart(this.animal);
  }
  
  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.id = +params["productId"];
      this.animal = animals[this.id];
    });
  }



}
