import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PetsOverviewPageRoutingModule } from './pets-overview-routing.module';

import { PetsOverviewPage } from './pets-overview.page';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PetsOverviewPageRoutingModule,
    SharedModule
  ],
  declarations: [PetsOverviewPage]
})
export class PetsOverviewPageModule {}
