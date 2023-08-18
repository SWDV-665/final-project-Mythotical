import { Component, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-grocery-dialog',
  templateUrl: './grocery-dialog.page.html',
  styleUrls: ['./grocery-dialog.page.scss']
})
export class GroceryDialogPage {

  @Input() title: string = '';
  @Input() action: string = '';
  @Input() item: string = '';

  constructor(private modalController: ModalController) {}

  saveDialog() {
    this.modalController.dismiss(this.item);
  }

  dismissDialog() {
    this.modalController.dismiss();
  }
}
