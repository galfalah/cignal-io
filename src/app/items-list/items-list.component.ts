import { Component, OnInit } from '@angular/core';
import {ItemsService} from './../items.service'
@Component({
  selector: 'items-list',
  templateUrl: './items-list.component.html',
  styleUrls: ['./items-list.component.css']
})
export class ItemsListComponent implements OnInit {
  //itemsList = ["item1","item2","item3"]
  itemsList;
  constructor(itemsService: ItemsService) {
    this.itemsList = itemsService.getItemsFromServer()[0].data;
      //console.log(this.itemsList[0].data )
  }

  ngOnInit() {
  }

}
