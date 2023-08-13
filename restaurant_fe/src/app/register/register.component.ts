import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor() { }

  email: string;
  phoneNumber: string;
  firstName: string;
  lastName: string;
  newPassword: string;
  confirmPassword: string;

  ngOnInit(): void { }

  register() {
    // Handle the registration logic here, such as sending data to a server
    // You can access the form field values like this.email, this.phoneNumber, etc.
    // You can also perform validation and error handling here
  }

}
