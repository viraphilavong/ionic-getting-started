import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Twilio1Page } from './twilio1.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { Twilio1RoutingModule } from './twilio1-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    RouterModule.forChild([{ path: '', component: Twilio1Page }]),
    Twilio1RoutingModule,
  ],
  declarations: [Twilio1Page]
})
export class Twilio1Module {}
