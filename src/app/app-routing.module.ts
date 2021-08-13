import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: 'home', loadChildren: () => import('./home/home.module').then(m=> m.HomeModule)},
  {path: 'table', loadChildren: () => import('./table/table.module').then(m => m.TableModule)},
  {path: 'dynamic', loadChildren: () => import('./dynamic/dynamic.module').then(m => m.DynamicModule)},
  {path: '', redirectTo: 'home', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
