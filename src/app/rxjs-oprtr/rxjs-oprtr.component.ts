import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiService } from 'src/app/api.service';

import { Observable, of, from } from 'rxjs'
import { tap, shareReplay } from 'rxjs/operators';


@Component({
  selector: 'app-rxjs-oprtr',
  templateUrl: './rxjs-oprtr.component.html',
  styleUrls: ['./rxjs-oprtr.component.css']
})
export class RxjsOprtrComponent implements OnInit {
  message1: string = 'hello from rxjs component'
  constructor(private http:HttpClient, private api: ApiService) { 
    console.log(this.http);

  }

  ngOnInit() {
    const person = {
      name: 'person'
    }

    console.log(this.api.baseURL);

    const personPromise: Promise<any> = Promise.resolve(person);
    console.log(personPromise);

    const personObj: Observable<any> = from(personPromise);
    // const personObj: Observable<any> = of(tap(res=>{console.log('res')}),person, shareReplay());
    
    personObj.subscribe();
    
    
  }

}
