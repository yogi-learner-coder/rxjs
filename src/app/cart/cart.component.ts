import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  productImage: Array<string>=[];
  constructor(private cartS: CartService) { }

  ngOnInit(): void {
    this.productImage.push(this.cartS.item);
    console.log(this.productImage);
  }

}
