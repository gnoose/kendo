import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { KendoComponentComponent } from './kendo-component/kendo-component.component';

const routes: Routes = [
  {
    path: '',
    component: KendoComponentComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
