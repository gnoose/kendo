import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { KendoComponentModule } from './kendo-component/kendo-component.module';

import 'hammerjs';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    KendoComponentModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
