import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GildedRoseComponent } from './gilded-rose/gilded-rose.component';
import { InventoryComponent } from './inventory/inventory.component';

const routes: Routes = [
  { path: '', component: GildedRoseComponent},
  { path: 'inventory', component: InventoryComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
