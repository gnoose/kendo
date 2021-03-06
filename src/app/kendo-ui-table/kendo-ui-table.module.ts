import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { GridModule, PDFModule, ExcelModule } from '@progress/kendo-angular-grid';
import { ChartsModule } from '@progress/kendo-angular-charts';
import { InputsModule } from '@progress/kendo-angular-inputs';
import { PopupModule } from "@progress/kendo-angular-popup";

import { KendoUiTableComponent } from './kendo-ui-table.component';
import { RatingComponent } from './rating.component';

import 'hammerjs';
import { StatePersistingService } from './kendo-ui-table.service';

@NgModule({
  declarations: [
    KendoUiTableComponent,
    RatingComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    GridModule,
    ChartsModule,
    InputsModule,
    PDFModule,
    ExcelModule,
    PopupModule
  ],
  providers: [StatePersistingService],
  exports: [
    KendoUiTableComponent
  ]
})
export class KendoUiTableModule { }
