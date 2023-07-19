import { Component, OnInit, Input } from '@angular/core';
import { Router, RouterModule, Routes, ActivatedRoute } from '@angular/router';
import { MarketService } from '../service/market.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {

  cartItems: any[] = [];

  constructor(private marketService: MarketService,  private router: Router) {
    this.cartItems = this.marketService.getCartItems();
  }

}
