import { Injectable } from '@angular/core';
import { Training } from '../model/Training';
import { Router } from '@angular/router';
import { Customer } from '../model/customer';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  cart1: Training[] = [];
  lclStorage: Training[] = [];
  customers : Customer[] = [];
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
    return this.totalSum;
  }

  /**
   * use of the local variable (object): cart1: Training[] = [];
   * @param cart
   */
  deleteTraining(cart: Training) {
    if (cart.quantity > 1) {
      cart.quantity -= 1;
    } else {
      const index = this.cart1.indexOf(cart);
      this.cart1.splice(index, 1);
      console.log(index);
    }
  }

  /**
   * Use of localStorage
   * @param training1
   */
  public saveTraining(training1: Training) {
    if (training1.quantity > 0) {
      let notFound: boolean = false;

      if (localStorage.length == 0) {
        localStorage.setItem(String(training1.id), JSON.stringify(training1));
      } else {
        for (let i = 0; i < localStorage.length; i++) {
          if (Number(localStorage.key(i))) {
            if (localStorage.key(i) == String(training1.id)) {
              //create a new Training object
              let t: Training = JSON.parse(
                String(localStorage.getItem(String(training1.id)))
              );
              //affect localstaorage id (key) element quantity to the newly object quantity
              t.quantity += training1.quantity;
              // again update the existing localstorage training object with with the newly created object (same id (key))
              localStorage.setItem(String(training1.id), JSON.stringify(t));

              notFound = true;
              break;
            }
          }
        }
        if (notFound == false) {
          localStorage.setItem(String(training1.id), JSON.stringify(training1));
        }
      }

      console.log(localStorage.length);
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
    let lclStorage: Training[] = [];

    for (let i = 0; i < localStorage.length; i++) {
      if (Number(localStorage.key(i))) {
        lclStorage.push(
          JSON.parse(String(localStorage.getItem(String(localStorage.key(i)))))
        );
      }
    }
    this.lclStorage = lclStorage;
    return this.lclStorage;
  }

  /**
   * use of the local storage
   * @param cart
   */
  deleteTrainingFromCart(cart: Training) {
    if (cart.quantity > 1) {
      cart.quantity -= 1;

      let t: Training = JSON.parse(
        String(localStorage.getItem(String(cart.id)))
      );

      //affect localstaorage id (key) element quantity to the newly object quantity
      t.quantity -= 1;
      // again update the existing localstorage training object with with the newly created object (same id (key))
      localStorage.setItem(String(cart.id), JSON.stringify(t));
    } else {
      localStorage.removeItem(String(cart.id));
      const index = this.lclStorage.indexOf(cart);
      this.lclStorage.splice(index, 1);
    }
    // window.location.reload()
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
  getCustomersListFromLocalStorage(){
    for(let i = 0; i<localStorage.length; i++){
      if(!Number(localStorage.key(i))){
        this.customers.push(JSON.parse(String(localStorage.getItem(String(localStorage.key(i))))))
      }
    }
  }

  /**
   * 
   * @param email 
   * @param password 
   */
  checkIfUserExists(email: string, password: string){
    this.getCustomersListFromLocalStorage();
    for(let i = 0; i<this.customers.length; i++){
      if(this.customers[i].email == email && this.customers[i].password == password){
        this.connected = true;
        this.router.navigateByUrl('cart')
        
      }
    }
    
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
  addToCart(training: Training) {
    if (training.quantity > 0) {
      let notFound: boolean = false;
      if (this.cart1.length == 0) {
        this.cart1.push(training);
      } else {
        for (let i = 0; i < this.cart1.length; i++) {
          if (this.cart1[i].id == training.id) {
            this.cart1[i].quantity += training.quantity;
            notFound = true;
            break;
          }
        }
        if (notFound == false) {
          this.cart1.push(training);
        }
      }

      console.log(this.cart1.length);
    } else {
      alert('Quantity must be positive');
      console.error('-------------');
    }
    console.log(this.lclStorage);
  }

   /**
   * Use of local variable (object) :cart1: Training[] = [];
   * @returns
   */
    getCart() {
      return this.cart1;
    }
  
}
