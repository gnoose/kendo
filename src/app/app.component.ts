import { ChangeDetectorRef, Component } from '@angular/core';
import { process } from '@progress/kendo-data-query';

import { sampleProducts } from './core/data/sample-data';
import { GridSettings } from './kendo-component/kendo-ui-table.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(
    private cdr: ChangeDetectorRef
  ) {
  }

  public employees = sampleProducts;
  public gridSettings: GridSettings = {
    state: {
      skip: 0,
      take: 5,

      // Initial filter descriptor
      filter: {
        logic: 'and',
        filters: []
      }
    },
    gridData: process(this.employees, {
      skip: 0,
      take: 5,
      // Initial filter descriptor
      filter: {
        logic: 'and',
        filters: []
      }
    }),
    columnsConfig: [{
      field: 'ProductID',
      title: 'ID',
      filterable: false,
      _width: 60
    }, {
      field: 'ProductName',
      title: 'Product Name',
      filterable: true,
      _width: 300
    }, {
      field: 'FirstOrderedOn',
      title: 'First Ordered On',
      filter: 'date',
      format: '{0:d}',
      _width: 240,
      filterable: true
    }, {
      field: 'UnitPrice',
      title: 'Unit Price',
      filter: 'numeric',
      format: '{0:c}',
      _width: 180,
      filterable: true
    }, {
      field: 'Discontinued',
      filter: 'boolean',
      _width: 120,
      filterable: true
    }]
  };

  public addRow() {
    const newRow = {
      "ProductID": 10,
      "ProductName": "Ikura",
      "SupplierID": 4,
      "CategoryID": 8,
      "QuantityPerUnit": "12 - 200 ml jars",
      "UnitPrice": 31,
      "UnitsInStock": 31,
      "UnitsOnOrder": 0,
      "ReorderLevel": 0,
      "Discontinued": false,
      "Category": {
        "CategoryID": 8,
        "CategoryName": "Seafood",
        "Description": "Seaweed and fish"
      },
      "FirstOrderedOn": new Date(1996, 8, 5)
    };
    newRow.ProductID = this.employees[this.employees.length-1].ProductID + 1;
    const savedEmployees = this.employees;
    savedEmployees.push(newRow);
    this.employees = savedEmployees;
    this.updateGridSetting();
    this.cdr.detectChanges();
  }

  public updateGridSetting() {
    this.gridSettings =  {
      state: {
        skip: 0,
        take: 5,

        // Initial filter descriptor
        filter: {
          logic: 'and',
          filters: []
        }
      },
      gridData: process(this.employees, {
        skip: 0,
        take: 5,
        // Initial filter descriptor
        filter: {
          logic: 'and',
          filters: []
        }
      }),
      columnsConfig: [{
        field: 'ProductID',
        title: 'ID',
        filterable: false,
        _width: 60
      }, {
        field: 'ProductName',
        title: 'Product Name',
        filterable: true,
        _width: 300
      }, {
        field: 'FirstOrderedOn',
        title: 'First Ordered On',
        filter: 'date',
        format: '{0:d}',
        _width: 240,
        filterable: true
      }, {
        field: 'UnitPrice',
        title: 'Unit Price',
        filter: 'numeric',
        format: '{0:c}',
        _width: 180,
        filterable: true
      }, {
        field: 'Discontinued',
        filter: 'boolean',
        _width: 120,
        filterable: true
      }]
    };
  }

}
