import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NumberButtonsPage } from './number-buttons.page';

const routes: Routes = [
  {
    path: '',
    component: NumberButtonsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NumberButtonsPageRoutingModule {}
