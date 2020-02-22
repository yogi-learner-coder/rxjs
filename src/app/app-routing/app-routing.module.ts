import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { ExampleComponent } from '../example/example.component';
import { CreateObsComponent } from '../create-obs/create-obs.component';
import { RxjsOprtrComponent } from '../rxjs-oprtr/rxjs-oprtr.component';
import { MessageComponent } from '../message/message.component';
import { CartComponent } from '../cart/cart.component';
import { Test1Component } from '../test1/test1.component';


const routes:Routes = [
  {
    path: 'example',
    component: ExampleComponent
  },
  {
    path: 'obser',
    component: CreateObsComponent
  },
  {
    path: 'hello',
    component: RxjsOprtrComponent
  },
{
  path: 'cart',
  component: CartComponent
},
{
  path: 'test1',
  component: Test1Component
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
