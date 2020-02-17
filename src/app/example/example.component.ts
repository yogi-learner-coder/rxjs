import { Component, OnInit } from '@angular/core';
import { interval, timer, fromEvent } from 'rxjs';

@Component({
  selector: 'app-example',
  templateUrl: './example.component.html',
  styleUrls: ['./example.component.css']
})
export class ExampleComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

 



  }
  
  // using interval method from RxJS, which will return response after every 1second

  interval$(){
    const intervalVal = interval(1000).subscribe( res=> {
      console.log(res);
    });
    
    setTimeout(()=>{
      intervalVal.unsubscribe();
      console.log('unsubscribed after 10seconds');
    }, 10000);
  }


  // using timer method from RxJS, which will return response after waiting 3s, then after every 1second
  timer$(){
    const timerVal = timer(5000, 1000).subscribe(res=> {
      console.log(res);
    });

    setTimeout(()=>{
      timerVal.unsubscribe();
      console.log('unsubscribed after 10seconds');
    }, 10000);
  }

  // using fromEvent method from RxJS, give you event whenever clicked on document
  fromEvent$(){
    fromEvent(document , 'click').subscribe(res=>{
      console.log(res);
    })
  }


 


}
