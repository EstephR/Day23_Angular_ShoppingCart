import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnimalDetailsComponent } from './animal-details/animal-details.component';
import { CartComponent } from './cart/cart.component';
import { ProductAreaComponent } from './product-area/product-area.component';

const routes: Routes = [
  {path:"", component: ProductAreaComponent
  },
  {path: "animals/:productId", component: AnimalDetailsComponent},
  {path: "cart", component: CartComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
