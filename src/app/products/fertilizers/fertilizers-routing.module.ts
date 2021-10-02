import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'fertilizers',
    loadChildren: () => import('../fertilizers/fertilizers.module').then(m => m.FertilizersPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FertilizersPageRoutingModule {}
