import { Component } from '@angular/core';
import { Router, RouterModule, Routes } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  constructor(private router: Router) {}

  goToHome() {
    this.router.navigate(["/home"]);
  }

  goToCart() {
    this.router.navigate(["/cart"]);
  }

  goToLogin() {
    this.router.navigate(["/login"]);
  }

  goToRegister() {
    this.router.navigate(["/register"]);
  }
  
}
