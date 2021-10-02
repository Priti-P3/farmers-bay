import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProductsListRoutingModule } from './products-list-routing.module';

import { ProductsListPage } from './products-list.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProductsListRoutingModule
  ],
  declarations: [ProductsListPage]
})
export class ProductsListPageModule {}
