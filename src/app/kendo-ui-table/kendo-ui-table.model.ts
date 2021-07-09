import { State, DataResult, process } from "@progress/kendo-data-query";

export interface ColumnSettings {
  field: string;
  title?: string;
  filter?: 'text'|'numeric'|'date'|'boolean';
  format?: string;
  width?: number;
  _width?: number;
  filterable: boolean;
  orderIndex?: number;
  hidden?: boolean;
}

export interface GridSettings {
  columnsConfig: ColumnSettings[];
  state: State;
  gridData?: DataResult;
}

export const sampleData = [
  {
    "ProductID": 1,
    "ProductName": "Chai",
    "SupplierID": 1,
    "CategoryID": 1,
    "QuantityPerUnit": "10 boxes x 20 bags",
    "UnitPrice": 18,
    "UnitsInStock": 39,
    "UnitsOnOrder": 0,
    "ReorderLevel": 10,
    "Discontinued": false,
    "Category": {
      "CategoryID": 1,
      "CategoryName": "Beverages",
      "Description": "Soft drinks, coffees, teas, beers, and ales"
    },
    "FirstOrderedOn": new Date(1996, 8, 20)
  },
  {
    "ProductID": 2,
    "ProductName": "Chang",
    "SupplierID": 1,
    "CategoryID": 1,
    "QuantityPerUnit": "24 - 12 oz bottles",
    "UnitPrice": 19,
    "UnitsInStock": 17,
    "UnitsOnOrder": 40,
    "ReorderLevel": 25,
    "Discontinued": false,
    "Category": {
      "CategoryID": 1,
      "CategoryName": "Beverages",
      "Description": "Soft drinks, coffees, teas, beers, and ales"
    },
    "FirstOrderedOn": new Date(1996, 7, 12)
  },
  {
    "ProductID": 3,
    "ProductName": "Aniseed Syrup",
    "SupplierID": 1,
    "CategoryID": 2,
    "QuantityPerUnit": "12 - 550 ml bottles",
    "UnitPrice": 10,
    "UnitsInStock": 13,
    "UnitsOnOrder": 70,
    "ReorderLevel": 25,
    "Discontinued": false,
    "Category": {
      "CategoryID": 2,
      "CategoryName": "Condiments",
      "Description": "Sweet and savory sauces, relishes, spreads, and seasonings"
    },
    "FirstOrderedOn": new Date(1996, 8, 26)
  },
  {
    "ProductID": 4,
    "ProductName": "Chef Anton's Cajun Seasoning",
    "SupplierID": 2,
    "CategoryID": 2,
    "QuantityPerUnit": "48 - 6 oz jars",
    "UnitPrice": 22,
    "UnitsInStock": 53,
    "UnitsOnOrder": 0,
    "ReorderLevel": 0,
    "Discontinued": false,
    "Category": {
      "CategoryID": 2,
      "CategoryName": "Condiments",
      "Description": "Sweet and savory sauces, relishes, spreads, and seasonings"
    },
    "FirstOrderedOn": new Date(1996, 9, 19)
  }
];


export const sampleGridSetting: GridSettings = {
  state: {
    skip: 0,
    take: 5,

    // Initial filter descriptor
    filter: {
      logic: 'and',
      filters: []
    }
  },
  gridData: process(sampleData, {
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
