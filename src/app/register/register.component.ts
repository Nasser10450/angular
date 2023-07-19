import { Component, OnInit } from '@angular/core';
import { JoinService, User } from '../service/join.service';
import { FormControl, FormGroup, FormControlName, ReactiveFormsModule } from '@angular/forms';
import { Router, RouterModule, Routes } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  registrationForm: FormGroup;

  constructor(private joinService: JoinService, private router: Router) {
    this.registrationForm = new FormGroup({
      fullName: new FormControl(''),
      email: new FormControl(''),
      password: new FormControl(''),
    });
  }

  register(): void {
    const formData: User = this.registrationForm.value;
    this.joinService.saveRegistrationData(formData);

    this.router.navigate(['/login']);
  }


  /*name: string = '';
  email: string = '';
  password: string = '';

  constructor(private joinService: JoinService, private router: Router) {}

  submitRegistrationForm(): void {
    const registrationData = {
      name: this.name,
      email: this.email,
      password: this.password
    };

    this.joinService.setItem('registrationData', registrationData);

    this.name = '';
    this.email = '';
    this.password = '';
  }

  goToLogin() {
    this.router.navigate(["/login"]);
  }*/
  
} 

