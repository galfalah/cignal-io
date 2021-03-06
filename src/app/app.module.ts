import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { ItemsListComponent } from './items-list/items-list.component';
import { ItemComponent } from './item/item.component';
import {ItemsService} from './items.service';
import { ItemDetailesComponent } from './item-detailes/item-detailes.component'

@NgModule({
  declarations: [
    AppComponent,
    ItemsListComponent,
    ItemComponent,
    ItemDetailesComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,

  ],
  providers: [ItemsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
