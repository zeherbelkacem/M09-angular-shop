import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Customer } from '../../models/customer';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {

  constructor(private cartService : CartService, private router: Router) { }

  ngOnInit(): void {


    
  }

  onAddCustomer(customer : Customer){
    this.cartService.onAddCustomer(customer);
    this.router.navigateByUrl('cart')
  }
}
