import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-connection',
  templateUrl: './connection.component.html',
  styleUrls: ['./connection.component.css']
})
export class ConnectionComponent implements OnInit {
email :string = '';
password : string = '';
  constructor(private router : Router, private cartService: CartService) { }

  ngOnInit(): void {
  }
  checkIfUserExists(){
   this.cartService.checkIfUserExists(this.email, this.password);
   
  }
}
