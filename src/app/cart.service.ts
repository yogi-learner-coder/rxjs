import { Injectable, OnInit } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService implements OnInit{
  item: string;
  constructor() { }

  ngOnInit(){
    console.log(this.item);  
  }

  

}
