import { Injectable } from '@angular/core';
import { Training } from '../models/Training';
import { Router } from '@angular/router';
import { Customer } from '../models/customer';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root',
})
export class CartService {
 
  lclStorage: Training[] = [];
  totalSum: number = 0;
  connected : boolean = false;

  constructor(private router: Router) {}

  getTotalSum() {
    let ttcSum = 0;

    if (this.lclStorage.length != 0) {
      for (let i = 0; i < this.lclStorage.length; i++) {
        ttcSum += this.lclStorage[i].price * this.lclStorage[i].quantity;
      }
    }
    this.totalSum = ttcSum;
    console.log(this.totalSum);
    
    return this.totalSum;
  }

  /**
   * Use of localStorage
   * @param training
   */
  public saveTraining(training: Training) {
    if (training.quantity > 0) {
     
      let notFound: boolean = false;

      if (localStorage.length == 0) {
        localStorage.setItem(String(training.id), JSON.stringify(training));
        //this.lclStorage.push(JSON.parse(String(localStorage.getItem(String(training.id)))));
          // JSON.parse(String(localStorage.getItem(String(localStorage.key(i)))))
      } else {
        for (let i = 0; i < localStorage.length; i++) {
          if (Number(localStorage.key(i))) {
            if (localStorage.key(i) == String(training.id)) {
              //create a new Training object
              // let t: Training = JSON.parse(
              //   String(localStorage.getItem(String(training.id)))
              // );
              //affect localstaorage id (key) element quantity to the newly object quantity
              // t.quantity += training.quantity;
              // again update the existing localstorage training object with with the newly created object (same id (key))
              localStorage.setItem(String(training.id), JSON.stringify(training));
             // this.lclStorage[i] = JSON.parse(String(localStorage.getItem(String(localStorage.key(i)))));

              notFound = true;
              break;
            }
          }
        }
        if (notFound == false) {
          localStorage.setItem(String(training.id), JSON.stringify(training));
         // this.lclStorage.push(training);
        }
      }

    } else {
      alert('Quantity must be positive');
      console.error('Quantity must be positive');
    }
  }

  /**
   * 
   * @returns
   */
  getLocalStorage() {
    // let lStorage: Training[] = [];
    this.lclStorage = [];
    for (let i = 0; i < localStorage.length; i++) {
      if (Number(localStorage.key(i))) {
        this.lclStorage.push(
          JSON.parse(String(localStorage.getItem(String(localStorage.key(i)))))
        );
      }
    }
    // this.lclStorage = lStorage;
    return this.lclStorage;
  }

  /**
   * use of the local storage
   * @param lStorage
   */
  deleteTrainingFromCart(lStorage: Training) {
    console.log(this.lclStorage.indexOf(lStorage));
    
    if (lStorage.quantity > 1) {
      lStorage.quantity -= 1;

      let t: Training = JSON.parse(
        String(localStorage.getItem(String(lStorage.id)))
      );

      //affect localstaorage id (key) element quantity to the newly object quantity
      t.quantity -= 1;
      // again update the existing localstorage training object with with the newly created object (same id (key))
      localStorage.setItem(String(lStorage.id), JSON.stringify(t));
    } else {
      localStorage.removeItem(String(lStorage.id));
      let index = this.lclStorage.indexOf(lStorage);
      this.lclStorage.splice(index, 1);
      
    }
  }

  /**
   *
   * @param customer
   */
  onAddCustomer(customer: Customer) {
    localStorage.setItem(customer.lastName, JSON.stringify(customer));
    
  }

/**
 * 
 */
  clearCart(){
    this.router.navigateByUrl('order')
    // for (let i = 0; i < localStorage.length; i++) {
    //   if (Number(localStorage.key(i))) {
    //     localStorage.removeItem(String(localStorage.key(i)))
    //   }
    // }
    localStorage.clear();
    this.connected = false;
  }

  /**
   * 
   */
   getConnectedValue(){
     return this.connected;
   }


   /**
   * Use of local variable(object): cart1: Training[] = [];
   * @param training
   */
  // addToCart(training: Training) {
  //   if (training.quantity > 0) {
  //     let notFound: boolean = false;
  //     if (this.cart1.length == 0) {
  //       this.cart1.push(training);
  //     } else {
  //       for (let i = 0; i < this.cart1.length; i++) {
  //         if (this.cart1[i].id == training.id) {
  //           this.cart1[i].quantity += training.quantity;
  //           notFound = true;
  //           break;
  //         }
  //       }
  //       if (notFound == false) {
  //         this.cart1.push(training);
  //       }
  //     }

  //     console.log(this.cart1.length);
  //   } else {
  //     alert('Quantity must be positive');
  //     console.error('-------------');
  //   }
  // }

   /**
   * Use of local variable (object) :cart1: Training[] = [];
   * @returns
   */
    // getCart() {
    //   return this.cart1;
    // }
  
}
