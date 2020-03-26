import { Component, OnInit, OnChanges } from '@angular/core';
import { TransferService } from '../transfer.service';


@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.css']
})
export class SecondComponent implements OnInit, OnChanges {
  valueSecond: string = '';
  serv: TransferService;
  constructor(serv: TransferService) { 
    this.serv = serv;
  }

  ngOnInit(): void {
    
  }

  ngOnChanges(){
  }

  ngDoCheck(){
    this.valueSecond = this.serv.valueForSecondCom();
    console.log('this.valueSecond', this.valueSecond);
  }

  ngAfterContentInit(){}

  ngAfterContentChecked(){}

  ngAfterViewInit(){}
  ngAfterViewChecked(){}
  
}
