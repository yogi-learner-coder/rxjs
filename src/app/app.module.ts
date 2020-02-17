import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing/app-routing.module';

import { AppComponent } from './app.component';
import { ExampleComponent } from './example/example.component';
import { CreateObsComponent } from './create-obs/create-obs.component';

@NgModule({
  declarations: [
    AppComponent,
    ExampleComponent,
    CreateObsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
