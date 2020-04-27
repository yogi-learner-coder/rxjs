import { Directive, OnInit, ElementRef } from '@angular/core';

@Directive({
  selector: '[colorElement]'
})

export class ColorElementDirective implements OnInit{
  constructor(private element: ElementRef){}
  ngOnInit(){
    this.element.nativeElement.style.background="green";
  }
}











// import { Directive } from '@angular/core';

// @Directive({
//   selector: '[appColorElement]'
// })
// export class ColorElementDirective {

//   constructor() { }

// }
