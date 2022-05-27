import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TrainingsComponent } from './components/trainings/trainings.component';
import { CartComponent } from './components/cart/cart.component';
import { CustomerComponent } from './components/customer/customer.component';
import { FinalOrderComponent } from './components/final-order/final-order.component';
import { AuthenticationComponent } from './components/authentication/authentication.component';
import { CommonModule } from '@angular/common';
import { CreateComponent } from './CRUDcomponents/create/create.component';
import { UpdateComponent } from './CRUDcomponents/update/update.component';
import { PageAccueilComponent } from './components/page-accueil/page-accueil.component';

@NgModule({
  declarations: [
    AppComponent,
    TrainingsComponent,
    CartComponent,
    CustomerComponent,
    FinalOrderComponent,
    AuthenticationComponent,
    CreateComponent,
    UpdateComponent,
    PageAccueilComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
