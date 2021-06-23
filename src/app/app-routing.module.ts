import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { KendoUiTableComponent } from './kendo-component/kendo-ui-table.component';

const routes: Routes = [
  {
    path: '',
    component: KendoUiTableComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
