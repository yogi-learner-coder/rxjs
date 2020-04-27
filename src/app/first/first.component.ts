import { Component, OnInit } from '@angular/core';
import {TransferService} from 'src/app/transfer.service'
import { HelloService } from '../hello.service';

import { HttpClient } from '@angular/common/http'

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css'],
  
})
export class FirstComponent implements OnInit {
  valueFirst: string = 'yogi';
  hello: HelloService;
  planet$:any;
  constructor(private serv: TransferService, hello: HelloService, private http: HttpClient) { 
    this.hello = hello;
  }

  ngOnInit(): void {
    this.hello.h = 909090;
    console.log(this.hello);
    this.planet$ = this.http.get('https://jsonplaceholder.typicode.com/posts/1');
  }
  takeValue(){
    this.serv.valueFromFirstCom(this.valueFirst);
  }


  


}
