import { Component, OnInit, OnChanges } from '@angular/core';
import { TransferService } from '../transfer.service';
import { HelloService } from '../hello.service';



@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.css'],
  
})
export class SecondComponent implements OnInit, OnChanges {
  valueSecond: string = '';
  serv: TransferService;
  hel: HelloService;
  constructor(serv: TransferService, hello: HelloService) { 
    this.serv = serv;
    this.hel = hello;
  }

  ngOnInit(): void {
    console.log(this.hel);
  }

  ngOnChanges(){
  }

  ngDoCheck(){

  }

  ngAfterContentInit(){}

  ngAfterContentChecked(){}

  ngAfterViewInit(){}
  ngAfterViewChecked(){}
  
}
