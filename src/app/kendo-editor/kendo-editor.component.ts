import { Component, OnInit } from '@angular/core';

import { ClipboardService } from 'ngx-clipboard';
import { FontSizeItem } from '@progress/kendo-angular-editor/dist/es2015/common/font-size-item.interface';

@Component({
  selector: 'app-kendo-editor',
  templateUrl: './kendo-editor.component.html',
  styleUrls: ['./kendo-editor.component.scss']
})
export class KendoEditorComponent implements OnInit {

  public clipBoardContent = '';
  public value = `<p>
            The Kendo Angular UI Editor allows your users to edit HTML in a familiar, user-friendly way.<br />
            In this version, the Editor provides the core HTML editing engine, which includes basic text formatting, hyperlinks and lists.
            The widget <strong>outputs identical HTML</strong> across all major browsers, follows
            accessibility standards, and provides API for content manipulation.
        </p>
        <p>Features include:</p>
        <ul>
            <li>Text formatting</li>
            <li>Bulleted and numbered lists</li>
            <li>Hyperlinks</li>
            <li>Cross-browser support</li>
            <li>Identical HTML output across browsers</li>
        </ul>`;

  public fontList: FontSizeItem[] = [
    {
      size: 8,
      text: '8px'
    },
    {
      size: 10,
      text: '10px'
    },
    {
      size: 12,
      text: '12px'
    },
    {
      size: 14,
      text: '14px'
    },
    {
      size: 18,
      text: '18px'
    },
    {
      size: 24,
      text: '24px'
    },
    {
      size: 36,
      text: '36px'
    },
    {
      size: 54,
      text: '54px'
    },
  ];

  constructor(
    private clipboardApi: ClipboardService
  ) { }

  ngOnInit(): void {
    this.clipBoardContent = this.value;
  }

  copyToClipBoard() {
    this.clipboardApi.copyFromContent(this.clipBoardContent);
  }

  valueChanged(event: any) {
    this.clipBoardContent = event;
  }

  setNewStyle(kendoElement: any, fontSizeElement: any, fontFamilyElement: any, ) {
    fontFamilyElement.value = 'Arial,"Helvetica Neue",Helvetica,sans-serif';
    kendoElement.exec('fontFamily', 'Arial,"Helvetica Neue",Helvetica,sans-serif');

    let block = kendoElement.value;

    let rgx = new RegExp(/<p>/gi);
    block = block.replace(rgx, "<p><span style=\"font-size: 12px; font-family: Arial,&quot;Helvetica Neue&quot;,Helvetica,sans-serif;\">");

    rgx = new RegExp(/<\/p>/gi);
    block = block.replace(rgx, "</span></p>");
    this.value = block;
    setTimeout(() => {this.setFontSize(fontSizeElement, kendoElement)});
  }

  addFont() {
    const newFontSize = this.fontList[this.fontList.length-1].size + 18;
    this.fontList.push({
      size: newFontSize,
      text: `${newFontSize}px`
    });
  }

  setFontSize(fontElement: any, kendoElement: any) {
    fontElement.value = 12;
    setTimeout(() => {this.execFontSize(kendoElement);})
  }

  execFontSize(kendoElement: any) {
    kendoElement.exec('fontSize', 12);
  }

  setFontFamily(fontElement: any, kendoElement: any) {
    fontElement.value = 'Arial,"Helvetica Neue",Helvetica,sans-serif';
    kendoElement.exec('fontFamily', 'Arial,"Helvetica Neue",Helvetica,sans-serif');
  }

}
