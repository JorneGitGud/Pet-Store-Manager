import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PetsOverviewPage } from './pets-overview.page';

const routes: Routes = [
  {
    path: '',
    component: PetsOverviewPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PetsOverviewPageRoutingModule {}
