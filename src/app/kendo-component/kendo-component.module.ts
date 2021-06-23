import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { GridModule, PDFModule, ExcelModule } from '@progress/kendo-angular-grid';
import { ChartsModule } from '@progress/kendo-angular-charts';
import { InputsModule } from '@progress/kendo-angular-inputs';

import { KendoComponentComponent } from './kendo-component.component';
import { RatingComponent } from './rating.component';

import 'hammerjs';

@NgModule({
  declarations: [
    KendoComponentComponent,
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
    ExcelModule
  ]
})
export class KendoComponentModule { }
