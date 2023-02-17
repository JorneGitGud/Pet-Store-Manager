import { Pet } from './../../models/pet';
import { ModalManagerService } from './../../services/modal-manager.service';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-add-pet-wizard',
  templateUrl: './add-pet-wizard.component.html',
  styleUrls: ['./add-pet-wizard.component.scss'],
})
export class AddPetWizardComponent implements OnInit {
  pet: Pet = {
    id: 0,
    name: '',
    status: 'available',
    category: {
      id: 0,
      name: '',
    },
    photoUrls: [],
    tags: [],
  };

  @Output() addedPet = new EventEmitter();

  isOpen: boolean = false;

  constructor(
    private modalManagerService: ModalManagerService,
    private apiService: ApiService
  ) {
    this.modalManagerService.addPetWizardIsOpen.subscribe((state) => {
      this.isOpen = state;
    });
  }

  ngOnInit() {}

  onClose() {
    this.modalManagerService.toggleAddPetWizard(false);
  }

  onAddPet() {
    let self = this;
    this.apiService.addPet(
      self.pet,
      (message: any) => {
        alert(message);
        self.addedPet.emit();
      },
      (error: any) => {
        alert(error);
      }
    );

    this.modalManagerService.toggleAddPetWizard(false);
  }

  stopCloseModal(event: any) {
    event.stopPropagation();
  }
}
