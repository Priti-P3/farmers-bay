import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PesticidesPageRoutingModule } from './pesticides-routing.module';

import { PesticidesPage } from './pesticides.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PesticidesPageRoutingModule
  ],
  declarations: [PesticidesPage]
})
export class PesticidesPageModule {}
