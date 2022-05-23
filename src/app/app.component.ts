import { Component } from '@angular/core';
import { Customer } from './model/customer';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  customers: Customer[] | undefined;
  ngOnInit() : void{
  
   
  }

  onSaveCustomers(){
       /* Save customers existing list in localStorage */   
       this.customers = [
        {
          firstName: "zeher",
          lastName :"belkacem",
          email: "zerher@fms.com",
          password : "1234",
          phone : "050608104"
        },
        {
          firstName: "aksel",
          lastName :"ilyas",
          email: "aksel@fms.com",
          password : "12345",
          phone : "050608004"
        }
      ] 
    for(let i =0; i < this.customers.length; i++){
      localStorage.setItem(this.customers[i].firstName, JSON.stringify(this.customers[i]) )
    }
  }
}
