import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AuthenticationComponent } from './components/authentication/authentication.component';
import { CartComponent } from './components/cart/cart.component';
import { CustomerComponent } from './components/customer/customer.component';
import { FinalOrderComponent } from './components/final-order/final-order.component';
import { PageAccueilComponent } from './components/page-accueil/page-accueil.component';
import { TrainingsComponent } from './components/trainings/trainings.component';
import { CreateComponent } from './CRUDcomponents/create/create.component';
import { UpdateComponent } from './CRUDcomponents/update/update.component';

const routes: Routes = [
  {
    path : 'trainings',
    component : TrainingsComponent
  },
  {
    path : 'home',
    component : PageAccueilComponent
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
    component : AuthenticationComponent
  },
  {
    path : 'order',
    component : FinalOrderComponent
  },
  {
    path : 'authentify',
    component : AuthenticationComponent
  },
  {
    path :'createTrainingForm',
    component : CreateComponent
  },
  {
    path :'updateTrainingForm/:id',
    component : UpdateComponent
  },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
