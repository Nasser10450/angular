import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  siteName: string = 'Marketplace';
  email: string = 'namo1998104@gmail.com';
  phoneNumber: string = '+201224927756';
  address: string = 'Wadi El Natrun, Buhaira, Egypt';
}
