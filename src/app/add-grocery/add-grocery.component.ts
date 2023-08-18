import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-add-grocery',
  templateUrl: './add-grocery.component.html',
  styleUrls: ['./add-grocery.component.scss'],
})
export class AddGroceryComponent {

  newItem: string = '';

  constructor(private modalController: ModalController) {}

  savePopup() {
    if (this.newItem.trim() !== '') {
      this.modalController.dismiss(this.newItem);
    }
  }

  closePopup() {
    this.modalController.dismiss();
  }
}
