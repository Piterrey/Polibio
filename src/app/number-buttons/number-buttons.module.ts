import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NumberButtonsPageRoutingModule } from './number-buttons-routing.module';

import { NumberButtonsPage } from './number-buttons.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NumberButtonsPageRoutingModule
  ],
  declarations: [NumberButtonsPage]
})
export class NumberButtonsPageModule {}
