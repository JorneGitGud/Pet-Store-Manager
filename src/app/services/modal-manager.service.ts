import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ModalManagerService {


  addPetWizardIsOpen = new BehaviorSubject<boolean>(false);

  // toggleModal(name:string, state:boolean){
  //   this[name].next(state);
  // }
  toggleAddPetWizard(state:boolean){
    this.addPetWizardIsOpen.next(state);
  }


  constructor() {

  }

}
