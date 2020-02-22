import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test1',
  templateUrl: './test1.component.html',
  styleUrls: ['./test1.component.css']
})
export class Test1Component implements OnInit {
  togglePara: boolean;;
  newArray: Array<any>=[];
  i:number;
  18004194000
  constructor() {     
  }

  ngOnInit(): void {  
    this.togglePara = false;  
    this.i=1;
  }

  pushArray(){    
    this.newArray.push('clicked');
  }

  onToggleDisplay(){
    this.togglePara = !this.togglePara;  
    this.newArray.push(this.i);
    this.i = this.i+1;
    console.log(this.newArray);
    return this.newArray
  }



  
}
