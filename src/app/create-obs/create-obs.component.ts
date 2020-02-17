import { Component, OnInit } from '@angular/core';
import {ApiService} from 'src/app/api.service';

@Component({
  selector: 'app-create-obs',
  templateUrl: './create-obs.component.html',
  styleUrls: ['./create-obs.component.css']
})
export class CreateObsComponent implements OnInit {

  constructor(private api: ApiService) { }

  ngOnInit() {
    
    const apiResponse = fetch(`${this.api.baseURL}data`)
    
  }

}
