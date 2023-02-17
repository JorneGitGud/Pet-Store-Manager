import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { AddPetWizardComponent } from '../components/add-pet-wizard/add-pet-wizard.component';

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
