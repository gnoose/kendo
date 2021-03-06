import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { EditorModule } from '@progress/kendo-angular-editor';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ClipboardModule } from 'ngx-clipboard';

import { KendoEditorComponent } from './kendo-editor.component';

@NgModule({
  declarations: [
    KendoEditorComponent
  ],
  exports: [
    KendoEditorComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    EditorModule,
    BrowserAnimationsModule,
    ClipboardModule
  ]
})
export class KendoEditorModule { }
