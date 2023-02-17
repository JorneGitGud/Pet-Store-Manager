import { ModalManagerService } from './../../services/modal-manager.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-pet-wizard',
  templateUrl: './add-pet-wizard.component.html',
  styleUrls: ['./add-pet-wizard.component.scss'],
})
export class AddPetWizardComponent implements OnInit {


  pet:any;
  isOpen: boolean = false;

  constructor(private modalManagerService:ModalManagerService) {
    this.modalManagerService.addPetWizardIsOpen.subscribe((state)=>{
      this.isOpen = state;
    })
   }

  ngOnInit() {}

  onClose(){
    this.modalManagerService.toggleAddPetWizard(false);
  }

  onAddPet(){
    this.modalManagerService.toggleAddPetWizard(false);


  }

  stopCloseModal(event: any){
    event.stopPropagation()
  }

}
