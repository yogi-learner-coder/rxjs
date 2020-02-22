import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing/app-routing.module';

import { AppComponent } from './app.component';
import { ExampleComponent } from './example/example.component';
import { CreateObsComponent } from './create-obs/create-obs.component';
import { RxjsOprtrComponent } from './rxjs-oprtr/rxjs-oprtr.component';

import {HttpClientModule} from '@angular/common/http';
import { MessageComponent } from './message/message.component';
import { Test1Component } from './test1/test1.component';
@NgModule({
  declarations: [
    AppComponent,
    ExampleComponent,
    CreateObsComponent,
    RxjsOprtrComponent,
    MessageComponent,
    Test1Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
