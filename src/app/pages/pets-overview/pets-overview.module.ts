import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PetsOverviewPageRoutingModule } from './pets-overview-routing.module';

import { PetsOverviewPage } from './pets-overview.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PetsOverviewPageRoutingModule,
  ],
  declarations: [PetsOverviewPage]
})
export class PetsOverviewPageModule {}
