import { Component, OnInit } from '@angular/core';
//Import Interface and Data of Animals to show it at the main page
import { animals } from '../dataAnimals';
import { IAnimals } from '../dataInterfaceAnimals';

@Component({
  selector: 'product-area',
  templateUrl: './product-area.component.html',
  styleUrls: ['./product-area.component.css']
})
export class ProductAreaComponent implements OnInit {
  animals: IAnimals[] = animals;
 

  constructor() { 
  }

  ngOnInit(): void {
  }

}
