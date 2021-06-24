import { ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';
import { DataBindingDirective } from '@progress/kendo-angular-grid';
import { process } from '@progress/kendo-data-query';
import { employees } from './employees';
import { images } from './images';

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
  public gridData: any[] = employees;
  public gridView: any[] = [];
  public mySelection: string[] = [];
  public conditionData: ConditionForm;

  constructor(
    private cdf: ChangeDetectorRef
  ) {
    this.conditionData = {
      filter: null,
      columns: null,
      columnList: null,
      sort: null,
      group: null
    };
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
    this.conditionData = {
      filter: this.kendoGrid.filter,
      columns: this.kendoGrid.columns,
      columnList: this.kendoGrid.columnList,
      sort: this.kendoGrid.sort,
      group: this.kendoGrid.group
    }

    console.log('kendoGrid = ', this.kendoGrid);
  }

  public loadFilter(): void {
    this.kendoGrid.filter = this.conditionData.filter;
    // this.kendoGrid.columns = this.conditionData.columns;
    // this.kendoGrid.columnList = this.conditionData.columnList;
    this.kendoGrid.sort = this.conditionData.sort;
    this.kendoGrid.group = this.conditionData.group;
    this.gridView = process(this.gridData, { filter: { ...this.conditionData.filter }, sort: this.conditionData.sort }).data;



    this.conditionData.filter = null;
  }
}
