import { ModalManagerService } from './../../services/modal-manager.service';
import { ApiService } from './../../services/api.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pets-overview',
  templateUrl: './pets-overview.page.html',
  styleUrls: ['./pets-overview.page.scss'],
})
export class PetsOverviewPage implements OnInit {

  pets: any[] = [];
  selectedStatus = 'available';

  constructor(private apiService: ApiService, private modalManagerService:ModalManagerService) {}

  ngOnInit() {
    this.refreshPets();
  }

  refreshPets() {
    this.apiService.getPets(this.selectedStatus).subscribe((pets) => {
      this.pets = pets;
    });
  }

  openAddPetModal() {
    this.modalManagerService.toggleAddPetWizard(true);
  }
}
