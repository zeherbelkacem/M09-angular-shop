import { Component, OnInit } from '@angular/core';
import { Training } from '../model/Training';
import { Router } from '@angular/router';
import { CartService } from '../services/cart.service';
import { Customer } from '../model/customer';

@Component({
  selector: 'app-trainings',
  templateUrl: './trainings.component.html',
  styleUrls: ['./trainings.component.css'],
})
export class TrainingsComponent implements OnInit {
  listTrainings: Training[] | undefined;

  // listTrainings = [{id : 1, name : 'Java', description : 'Foprmation java se 8 sur 5 jours', price :1500},
  // {id : 2, name : 'Angular', description : 'Angular/Typescript', price :1250},
  // {id : 3, name : 'Python', description : 'Formation python/djongo 10 jours', price :15}]

  constructor(private cartService: CartService, private router: Router) {}

  ngOnInit(): void {
    this.listTrainings = [
      {
        id: 1,
        name: 'Java',
        description: 'Foprmation java se 8 sur 5 jours',
        price: 1500,
        quantity: 1,
      },
      {
        id: 2,
        name: 'Angular',
        description: 'Angular/Typescript',
        price: 1250,
        quantity: 1,
      },
      {
        id: 3,
        name: 'Python',
        description: 'Formation python/djongo 10 jours',
        price: 15,
        quantity: 1,
      },
    ];

  }

  // displayTrainings(){
  //   // this.listTrainings = [];
  //   this.listTrainings = [{id : 1, name : 'Java', description : 'Foprmation java se 8 sur 5 jours', price :1500, quantity : 1},
  //                         {id : 2, name : 'Angular', description : 'Angular/Typescript', price :1250, quantity : 1},
  //                         {id : 3, name : 'Python', description : 'Formation python/djongo 10 jours', price :15, quantity : 1}]
  // }

  /**
   * Create a cart using a local Training cariable (object)
   * @param training 
   */
  addToCart(training: Training) {
    this.cartService.addToCart(training);
    this.router.navigateByUrl('cart');
  }

  onChangeEvent(training: Training, event: any) {
    training.quantity = event.target.value;
  }

  /**
   * Create a cart using the localStorage
   * @param training 
   */
  addToLocalStorage(training: Training) {
    this.cartService.saveTraining(training);
    this.router.navigateByUrl('cart');
  }
}
