import { Component } from '@angular/core';
import { ModalController, AlertController } from '@ionic/angular';
import { DataService } from '../data.service';
import { AddGroceryComponent } from '../add-grocery/add-grocery.component';
import { EditGroceryComponent } from '../edit-grocery/edit-grocery.component';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  groceryList: any[] = [];
  selectedGrocery: any;

  constructor(private dataService: DataService, private modalController: ModalController, private alertController: AlertController) {}

  ionViewWillEnter() {
    this.loadGroceries();
  }

  async loadGroceries() {
    this.dataService.getGroceries().subscribe(
      (data) => {
        this.groceryList = data;
      },
      (error) => {
        console.error('Error loading groceries:', error);
      }
    );
  }

  async editItem(item: any) {
    this.selectedGrocery = item;
    const modal = await this.modalController.create({
      component: EditGroceryComponent,
      componentProps: {
        grocery: item
      }
    });

    modal.onDidDismiss().then((data) => {
      if (data.data) {
        // Update the grocery item with the edited title
        this.dataService.updateGrocery(item.id, data.data, item.completed).subscribe(
          () => {
            item.title = data.data.title;
          },
          (error) => {
            console.error('Error updating grocery:', error);
          }
        );
      }
    });

    return await modal.present();
  }

  async confirmDelete(item: any) {
      this.selectedGrocery = item;
      const alert = await this.alertController.create({
        header: 'Confirm Delete',
        message: `Are you sure you want to delete ${item.title}?`,
        buttons: [
          {
            text: 'Cancel',
            role: 'cancel',
            cssClass: 'secondary'
          },
          {
            text: 'Delete',
            handler: () => {
              this.dataService.deleteGrocery(item.id).subscribe(
                () => {
                  // Remove the deleted item from the list
                  this.groceryList = this.groceryList.filter((grocery) => grocery.id !== item.id);
                },
                (error) => {
                  console.error('Error deleting grocery:', error);
                }
              );
            }
          }
        ]
      });
    
    await alert.present();
  }    

  async openAddPopup() {
    const modal = await this.modalController.create({
      component: AddGroceryComponent
    });

    modal.onDidDismiss().then((data) => {
      if (data.data) {
        this.dataService.addGrocery(data.data).subscribe(
          (item) => {
            this.groceryList.push(item);
          },
          (error) => {
            console.error('Error adding grocery:', error);
          }
        );
      }
    });

    return await modal.present();
  }
}
