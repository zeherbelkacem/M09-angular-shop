import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Training } from '../model/Training';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  connected : boolean | undefined;
  cart: Training[] | undefined;
  totalSum: number | undefined;
  lclStorage: Training[] | undefined;
  constructor(private cartService: CartService, private router: Router) {}

  ngOnInit(): void {
    this.lclStorage = this.cartService.getLocalStorage();
    this.cart = this.cartService.getCart();
    this.totalSum = this.cartService.getTotalSum();
    this.connected = this.cartService.getConnectedValue();
    console.log(this.connected);
    
  }

  //localStorage use
  withdrawTrainingFromLocalStorage(lStorage: Training) {
    this.cartService.deleteTrainingFromCart(lStorage);
    this.totalSum = this.cartService.getTotalSum();
  }

  //local cart declaration
  withdrawTraining(cart: Training) {
    this.cartService.deleteTraining(cart);
    this.totalSum = this.cartService.getTotalSum();
  }
  validateCart(){
    this.router.navigateByUrl('login');
  }

  clearCart(){
    this.cartService.clearCart();
  }
}
