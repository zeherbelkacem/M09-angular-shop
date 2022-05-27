import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.css']
})
export class AuthenticationComponent implements OnInit {
  email :string = '';
  password : string = '';
  constructor(private authenticationService : AuthenticationService ) {}

  ngOnInit(): void {
  }

  checkIfUserExists(){
    this.authenticationService.checkIfUserExists(this.email, this.password);
   }
}
