import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PesticidesPage } from './pesticides.page';

const routes: Routes = [
  {
    path: '',
    component: PesticidesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PesticidesPageRoutingModule {}
