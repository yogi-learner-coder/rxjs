import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';
import { Observable, noop } from 'rxjs';

import { tap, shareReplay } from 'rxjs/operators';


@Component({
  selector: 'app-create-obs',
  templateUrl: './create-obs.component.html',
  styleUrls: ['./create-obs.component.css']
})
export class CreateObsComponent implements OnInit {
  apiResponse: any;
  data: Array<{}>;
  constructor(private api: ApiService) { }

  ngOnInit() {
    
    
    
    const http$ = Observable.create(observer => {
      fetch(`${this.api.baseURL}data`)
      .then(response => {
        return response.json();
      })
      .then(body =>{
        observer.next(body);
        console.log(observer.next(body));
        observer.complete();
      })
      .catch(err=>{
        observer.error(err);
      })      
    });

    http$.subscribe(
      data => {
        this.data = data;
      },
      noop,
      ()=> console.log('completed')
    )

    http$.subscribe( data1 => {
      console.log(data1);
    })
    
  }

}
