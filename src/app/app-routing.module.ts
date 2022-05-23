import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './cart/cart.component';
import { ConnectionComponent } from './connection/connection.component';
import { CustomerComponent } from './customer/customer.component';
import { FinalOrderComponent } from './final-order/final-order.component';
import { TrainingsComponent } from './trainings/trainings.component';

const routes: Routes = [
  {
    path : 'trainings',
    component : TrainingsComponent
  },
  {
    path : 'cart',
    component : CartComponent
  },
  {
    path : 'createCustomer',
    component : CustomerComponent
  },
  {
    path : 'login',
    component : ConnectionComponent
  },
  {
    path : 'order',
    component : FinalOrderComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
