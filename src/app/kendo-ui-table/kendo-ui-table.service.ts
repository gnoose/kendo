import { GridSettings } from './kendo-ui-table.model';
import { Injectable } from '@angular/core';

const getCircularReplacer = () => {
  const seen = new WeakSet();
  return (key: any, value: any) => {
    if (typeof value === "object" && value !== null) {
      if (seen.has(value)) {
        return;
      }
      seen.add(value);
    }
    return value;
  };
};

@Injectable()
export class StatePersistingService {
  public get<T>(token: string): T {
    const settings = localStorage.getItem(token);
    return settings ? JSON.parse(settings) : settings;
  }
  public getArray<T>(token: string): Array<T> {
    const settings = sessionStorage.getItem(token);
    if(settings) {
      return (settings || '').split('@#@').map(grid => JSON.parse(grid));
    } else {
      return [];
    }
    // return settings ? JSON.parse(settings) : settings;
  }

  public set<T>(token: string, gridConfig: GridSettings): void {
    localStorage.setItem(token, JSON.stringify(gridConfig, getCircularReplacer()));
  }

  public setArray(token: string, gridConfig: GridSettings[]): void {
    const storageStr = gridConfig.map(grid => JSON.stringify(grid, getCircularReplacer())).join('@#@');
    sessionStorage.setItem(token, storageStr);
  }
}
