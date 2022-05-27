import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { User } from './models/user';
import { AuthenticationService } from './services/authentication.service';
import { CartService } from './services/cart.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  users: User[] | undefined;
  cartArticlesNumber : number | undefined;
  

  constructor(public cartService :CartService, public authService : AuthenticationService, private router : Router){
    //this.cartArticlesNumber = this.cartService.getLocalStorage().length;
  }
  ngOnInit() : void{
  }

  userAuthentication(){
    this.router.navigateByUrl('login')
  }


  onSaveUsersInLocalStorage(){

       /* Save customers existing list in localStorage */   
       this.users = [
        {
          name: "belkacem",
          email: "belkacem@fms.com",
          password : "1234",
          roles : ["ADMIN", "USER"]
        },
        {
          name: "sarah",
          email: "sarah@fms.com",
          password : "1234",
          roles : ["ADMIN", "USER"]
        },
        {
          name: "aksel",
          email: "aksel@fms.com",
          password : "1234",
          roles : ["USER"]
        }, 
        {
        name: "ilyas",
        email: "ilays@fms.com",
        password : "1234",
        roles : ["USER"]
      }
      ] 
     
    for(let i =0; i < this.users.length; i++){
      localStorage.setItem(this.users[i].name, JSON.stringify(this.users[i]) )
    }
  }
}
