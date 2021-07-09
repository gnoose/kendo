import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PopupModule } from '@progress/kendo-angular-popup';

import 'hammerjs';

import { AppRoutingModule } from './app-routing.module';
import { KendoUiTableModule } from './kendo-ui-table/kendo-ui-table.module';
import { KendoEditorModule } from './kendo-editor/kendo-editor.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    KendoUiTableModule,
    PopupModule,
    BrowserAnimationsModule,
    KendoEditorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
