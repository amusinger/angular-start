import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ItemComponent } from './item.component';
import { ItemListComponent } from './item-list/item-list.component';
import { ItemDetailComponent } from './item-detail/item-detail.component';
import { ItemRoutingModule } from './item-routing.module';

@NgModule({
  imports: [
    CommonModule,
    ItemRoutingModule
  ],
  declarations: [
    ItemComponent,
    ItemListComponent,
    ItemDetailComponent
  ]
})
export class ItemModule { }
