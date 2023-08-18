import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GroceryDialogPage } from './grocery-dialog.page';

const routes: Routes = [
  {
    path: '',
    component: GroceryDialogPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GroceryDialogPageRoutingModule {}
