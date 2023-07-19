import { Component, OnInit } from '@angular/core';
import { JoinService, User } from '../service/join.service';
import { Router, RouterModule, Routes } from '@angular/router';
import { FormControl, FormGroup, FormControlName, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  registrationData: any;

  constructor(private joinService: JoinService, private router: Router) {}

  ngOnInit() {
    this.registrationData = this.joinService.getRegistrationData();
  }

  goToHome() {
    this.router.navigate(["/home"]);
  }

}
