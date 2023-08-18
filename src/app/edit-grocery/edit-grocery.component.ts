import { Component, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-edit-grocery',
  templateUrl: './edit-grocery.component.html',
  styleUrls: ['./edit-grocery.component.scss']
})
export class EditGroceryComponent {

  @Input() grocery: any;
  editedTitle: string = '';

  constructor(private modalController: ModalController) {}

  ionViewDidEnter() {
    this.editedTitle = this.grocery.title;
  }

  closeModal() {
    this.modalController.dismiss();
  }

  saveChanges() {
    this.modalController.dismiss({
      title: this.editedTitle
    });
  }
}
