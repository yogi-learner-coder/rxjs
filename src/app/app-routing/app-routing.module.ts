import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { ExampleComponent } from '../example/example.component';
import { CreateObsComponent } from '../create-obs/create-obs.component';


const routes:Routes = [
  {
    path: 'example',
    component: ExampleComponent
  },
  {
    path: 'obser',
    component: CreateObsComponent
  }
]



@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }
