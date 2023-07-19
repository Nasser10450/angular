import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MarketService } from '../service/market.service';

@Component({
  selector: 'app-singlepro',
  templateUrl: './singlepro.component.html',
  styleUrls: ['./singlepro.component.css']
})
export class SingleproComponent implements OnInit {

  product: any;

  constructor(
    private route: ActivatedRoute,
    private marketService: MarketService,
  ) {}

  ngOnInit() {
    const productIdParam = this.route.snapshot.paramMap.get('id');
    if (productIdParam !== null) {
      const productId = +productIdParam;
      this.getProduct(productId);
    }
  }
  
  getProduct(id: number) {
    this.marketService.getProductById(id).subscribe((products) => {
      this.product = products;
    });
  }

  addToCart(product: any) {
    this.marketService.addToCart(product);
  }  

}
