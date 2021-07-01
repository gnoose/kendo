import { Component, Input, TemplateRef } from '@angular/core';
import { GridComponent } from '@progress/kendo-angular-grid';
import { CompositeFilterDescriptor, process, SortDescriptor, State } from '@progress/kendo-data-query';

import { ColumnSettings, GridSettings, sampleData, sampleGridSetting } from './kendo-ui-table.model';
import { PopupService } from '@progress/kendo-angular-popup';
import { StatePersistingService } from './kendo-ui-table.service';
import { DataResult } from '@progress/kendo-data-query/dist/npm/data-result.interface';

@Component({
  selector: 'app-kendo-component',
  templateUrl: './kendo-ui-table.component.html',
  styleUrls: ['./kendo-ui-table.component.scss']
})

export class KendoUiTableComponent {
  @Input() employees = sampleData;
  @Input() gridSettings: GridSettings = sampleGridSetting;
  public emptyFilter: CompositeFilterDescriptor;
  public emptyData: DataResult;
  public emptySort: SortDescriptor[];
  public savedList: GridSettings[];
  private popupRef: any;

  public get savedStateExists(): boolean {
    return !!this.persistingService.get('gridSettings');
  }

  constructor(
    public persistingService: StatePersistingService,
    private popupService: PopupService
    ) {
    const savedGrids: GridSettings[] = this.persistingService.getArray<GridSettings>('gridSettings');
    this.savedList = savedGrids;

    this.emptyFilter = {
      logic: 'and',
      filters: []
    };
    this.emptyData = {
      data: this.employees,
      total: this.employees.length
    }
    this.emptySort = [{
      field: '',
      dir: 'asc'
    }];

    this.savedList = [];
  }

  public loadFilter(index: number): void {
    const gridSettings: GridSettings = this.savedList[index];

    if (gridSettings !== null) {
      this.gridSettings = this.mapGridSettings(gridSettings);
    }
  }

  public togglePopup(anchor: HTMLElement, template: TemplateRef<any>) {
    const savedGrids: GridSettings[] = this.persistingService.getArray<GridSettings>('gridSettings');
    this.savedList = savedGrids;
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

  public dataStateChange(state: State): void {
    this.gridSettings.state = state;
    this.gridSettings.gridData = process(this.employees, state);
  }

  public saveGridSettings(grid: GridComponent): void {
    const columns = grid.columns;

    const gridConfig = {
      state: this.gridSettings.state,
      columnsConfig: columns.toArray().map((item: any) => {
        return Object.keys(item)
          .filter(propName => !propName.toLowerCase()
            .includes('template'))
          .reduce((acc, curr) => ({...acc, ...{[curr]: item[curr]}}), <ColumnSettings> {});
      })
    };

    let savedGrids: GridSettings[] = this.persistingService.getArray<GridSettings>('gridSettings');
    if (savedGrids) {
      savedGrids = [...savedGrids, gridConfig];
    } else {
      savedGrids = [gridConfig];
    }
    this.persistingService.setArray('gridSettings', savedGrids);
    // this.persistingService.set('gridSettings', gridConfig);
  }

  public mapGridSettings(gridSettings: GridSettings): GridSettings {
    const state = gridSettings.state;
    this.mapDateFilter(state.filter);

    return {
      state,
      columnsConfig: gridSettings.columnsConfig.sort((a: any, b: any) => a.orderIndex - b.orderIndex),
      gridData: process(this.employees, state)
    };
  }

  private mapDateFilter = (descriptor: any) => {
    const filters = descriptor.filters || [];

    filters.forEach((filter: any) => {
      if (filter.filters) {
        this.mapDateFilter(filter);
      } else if (filter.field === 'FirstOrderedOn' && filter.value) {
        filter.value = new Date(filter.value);
      }
    });
  }
}
