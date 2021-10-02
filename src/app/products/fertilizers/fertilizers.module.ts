import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FertilizersPageRoutingModule } from './fertilizers-routing.module';

import { FertilizersPage } from './fertilizers.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FertilizersPageRoutingModule
  ],
  declarations: [FertilizersPage]
})
export class FertilizersPageModule {}
