import { NgModule } from '@angular/core';
import { RouterModule, Routes, Router } from '@angular/router';
import { FormControl, FormControlName, FormGroup, ReactiveFormsModule } from '@angular/forms';

import { HomeComponent } from './home/home.component';
import { CartComponent } from './cart/cart.component';
import { SingleproComponent } from './singlepro/singlepro.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'cart', component: CartComponent },
  { path: 'product/:id', component: SingleproComponent },
  { path: 'navbar', component: NavbarComponent },
  { path: '', component: RegisterComponent },
  { path: 'login', component: LoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
  
}
