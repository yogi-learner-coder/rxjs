import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TransferService {
  value:string;
  constructor() { }

  valueFromFirstCom(x){
    this.value = x;
    console.log(this.value);
  }

  valueForSecondCom(){
    return this.value;
  }
}
