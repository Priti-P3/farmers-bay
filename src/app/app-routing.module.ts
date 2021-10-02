import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'products',
    loadChildren: () => import('./products/products-list/products-list.module').then( m => m.ProductsListPageModule)
  },
  {
    path: 'product-details',
    loadChildren: () => import('./products/product-details/product-details.module').then( m => m.ProductDetailsPageModule)
  }

];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
