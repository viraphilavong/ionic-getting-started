import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Mapbox1Page } from './mapbox1.page';
import { Mapbox1RoutingModule } from './mapbox1-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    RouterModule.forChild([{ path: '', component: Mapbox1Page }]),
    Mapbox1RoutingModule,
  ],
  declarations: [Mapbox1Page]
})
export class Mapbox1Module {}
