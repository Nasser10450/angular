import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { MarketService } from '../service/market.service';
import { Router, RouterModule, Routes, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit { 

  products: any;

  constructor(private marketService: MarketService, private router: Router) {}

  ngOnInit() {
    this.getProducts();
  }
  
  getProducts() {
    this.marketService.getProduct().subscribe((products) => {
      this.products = products;
    });
  }


  /*||||||||||||||||||||||||||||||||||||||||||||||||*/

  addToCart(product: any) {
    this.marketService.addToCart(product);
    window.alert('Your product has been added to the cart!');
    /*this.router.navigate(["/cart"]);*/
  }  

  /*||||||||||||||||||||||||||||||||||||||||||||||||*/
  
  goToSinglepro(id: number) {
    this.router.navigate(['/singlepro', id]);
  }

  /*||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/




}
