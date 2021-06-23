import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { KendoUiTableModule } from './kendo-component/kendo-ui-table.module';

import 'hammerjs';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    KendoUiTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
