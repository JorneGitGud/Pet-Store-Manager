import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddPetWizardComponent } from '../components/add-pet-wizard/add-pet-wizard.component';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';

const components = [
  AddPetWizardComponent
]

@NgModule({
  declarations: [components],
  imports: [
    CommonModule,
    IonicModule,
    FormsModule,
  ],
  exports: [components]
})
export class SharedModule { }
