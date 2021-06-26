import { ChangeDetectorRef, Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { DataBindingDirective } from '@progress/kendo-angular-grid';
import { process } from '@progress/kendo-data-query';
import { employees } from './employees';
import { images } from './images';
import {
  PopupService,
  PopupRef
} from '@progress/kendo-angular-popup';

interface ConditionForm {
  filter: any;
  columns: any;
  columnList: any;
  sort: any;
  group: null;
}

@Component({
  selector: 'app-kendo-component',
  templateUrl: './kendo-ui-table.component.html',
  styleUrls: ['./kendo-ui-table.component.scss']
})

export class KendoUiTableComponent implements OnInit {
  @ViewChild('kendoGrid') kendoGrid: any;
  // @ViewChild(DataBindingDirective) dataBinding: DataBindingDirective;
  private popupRef: any;
  public gridData: any[] = employees;
  public gridView: any[] = [];
  public mySelection: string[] = [];
  public filterList: ConditionForm[];
  constructor(
    private popupService: PopupService
  ) {
    this.filterList = [];
  }

  public ngOnInit(): void {
    this.gridView = this.gridData;
  }

  public onFilter(event: Event): void {
    const inputValue = (<HTMLInputElement>event.target).value;
    this.gridView = process(this.gridData, {
      filter: {
        logic: "or",
        filters: [
          {
            field: 'full_name',
            operator: 'contains',
            value: inputValue
          },
          {
            field: 'job_title',
            operator: 'contains',
            value: inputValue
          },
          {
            field: 'budget',
            operator: 'contains',
            value: inputValue
          },
          {
            field: 'phone',
            operator: 'contains',
            value: inputValue
          },
          {
            field: 'address',
            operator: 'contains',
            value: inputValue
          }
        ],
      }
    }).data;

    // this.dataBinding.skip = 0;
  }

  public photoURL(dataItem: any): string {
    const code: string = dataItem.img_id + dataItem.gender;
    const image: any = images;

    return image[code];
  }

  public flagURL(dataItem: any): string {
    const code: string = dataItem.country;
    const image: any = images;

    return image[code];
  }

  public saveFilter($event: Event): void {
    debugger;
    this.filterList.push({
      filter: this.kendoGrid.filter,
      columns: this.kendoGrid.columns,
      columnList: this.kendoGrid.columnList,
      sort: this.kendoGrid.sort,
      group: this.kendoGrid.group
    });

    console.log('kendoGrid = ', this.filterList);
  }

  public loadFilter(index: number): void {
    this.kendoGrid.filter = this.filterList[index].filter;
    // this.kendoGrid.columns = this.filterList[index].columns;
    // this.kendoGrid.columnList = this.filterList[index].columnList;
    // this.kendoGrid.sort = this.filterList[index].sort;
    // this.kendoGrid.group = this.filterList[index].group;
    // this.kendoGrid.sort();
    // this.gridView = process(this.gridData, { filter: { ...this.filterList[index].filter }}).data;
    // this.gridView = process(this.gridData, { filter: { ...this.filterList[index].filter }, sort: this.filterList[index].sort }).data;




    this.filterList[index].filter = null;
  }

  public togglePopup(anchor: HTMLElement, template: TemplateRef<any>) {
    if (this.popupRef) {
      this.popupRef.close();
      this.popupRef = null;
    } else {
      this.popupRef = this.popupService.open({
        anchor: anchor as any,
        content: template
      });
    }
  }

}
