import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { Training } from '../../models/Training';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  connected: boolean | undefined;
  lclStorage: Training[] | undefined;

  constructor(
    public cartService: CartService,
    private router: Router,
    public authService: AuthenticationService
  ) {}

  ngOnInit(): void {
    console.log(this.cartService.getLocalStorage());
    
   // this.lclStorage = this.cartService.getLocalStorage();
    this.connected = this.cartService.getConnectedValue();
  }

  //localStorage use
  removeTrainingFromLocalStorage(lStorage: Training) {
    this.cartService.deleteTrainingFromCart(lStorage);
  }

  //local cart declaration
  // withdrawTraining(cart: Training) {
  //   this.cartService.deleteTraining(cart);
  //   this.totalSum = this.cartService.getTotalSum();
  // }
  validateCart() {
    if (!this.authService.getUserConnected()){
      this.router.navigateByUrl('login');
    }else{
      this.router.navigateByUrl('order');
    } 
  }

  clearCart() {
    this.cartService.clearCart();
  }
}
