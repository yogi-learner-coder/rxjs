import { Component, OnInit } from '@angular/core';
import {TransferService} from 'src/app/transfer.service'

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent implements OnInit {
  valueFirst: string = 'yogi';
  constructor(private serv: TransferService) { }

  ngOnInit(): void {
  }
  takeValue(){
    this.serv.valueFromFirstCom(this.valueFirst);
  }


}
