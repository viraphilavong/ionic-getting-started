import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Twilio1Page } from './twilio1.page';

const routes: Routes = [
  {
    path: '',
    component: Twilio1Page,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Twilio1RoutingModule {}
