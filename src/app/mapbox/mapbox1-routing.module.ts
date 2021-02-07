import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Mapbox1Page } from './mapbox1.page';

const routes: Routes = [
  {
    path: '',
    component: Mapbox1Page,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Mapbox1RoutingModule {}
