import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'fertilizers',
    loadChildren: () => import('./products/fertilizers/fertilizers.module').then( m => m.FertilizersPageModule)
  },
  {
    path: 'pesticides',
    loadChildren: () => import('./products/pesticides/pesticides.module').then( m => m.PesticidesPageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
