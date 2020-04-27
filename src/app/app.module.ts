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
import { FirstComponent } from './first/first.component';
import { SecondComponent } from './second/second.component';

import { ColorElementDirective } from './color-element.directive';
import { HelloService } from './hello.service';
import { FoodGalleryComponent } from './components/food-gallery/food-gallery.component';



@NgModule({
  declarations: [
    AppComponent,
    ExampleComponent,
    CreateObsComponent,
    RxjsOprtrComponent,
    MessageComponent,
    Test1Component,
    FirstComponent,
    SecondComponent,
    ColorElementDirective,
    FoodGalleryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
