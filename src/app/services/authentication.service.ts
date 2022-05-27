import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../models/user';
import { CartService } from './cart.service';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  users: User[] = [];
  adminConnected : boolean | undefined;
  userConnected = false;
  welcomeConnected: string = 'Account';

  constructor(private cartService: CartService, private router: Router) {}

  /**
   *
   * @param email
   * @param password
   */
  checkIfUserExists(email: string, password: string) {
    this.getUsersListFromLocalStorage();
    for (let i = 0; i < this.users.length; i++) {
      if (this.users[i].email == email && this.users[i].password == password) {
        this.userConnected = true;
        if (this.users[i].roles.includes('ADMIN')) {
          this.adminConnected = true;
          this.welcomeConnected = 'Bonjour ' + this.users[i].name;
          this.router.navigateByUrl('#');
        } else {
          this.welcomeConnected = 'Bonjour ' + this.users[i].name;
          this.router.navigateByUrl('#');
        }
      }
    }
  }

  /**
   *
   */
  getUsersListFromLocalStorage() {
    for (let i = 0; i < localStorage.length; i++) {
      if (!Number(localStorage.key(i))) {
        this.users.push(
          JSON.parse(String(localStorage.getItem(String(localStorage.key(i)))))
        );
      }
    }
  }

  getAdminConnected() {
    return this.adminConnected;
  }

  getUserConnected() {
    return this.userConnected;
  }

  getWelcomeConnected() {
    return this.welcomeConnected;
  }
}
