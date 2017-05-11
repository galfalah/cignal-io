import { Component, OnInit, Input } from '@angular/core';
import {ItemsService} from './../items.service'

@Component({
  selector: 'item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  imageUrl;
  itemId;
  itemName;
  detailFor;
  itemServices;

  @Input() itemData;

  constructor(itemsService: ItemsService) {
    this.itemServices = itemsService;
  }

  ngOnInit() {
      console.log(this.itemData)
      this.imageUrl=this.itemData.photo_url;
      this.itemId=this.itemData.id;
      this.itemName=this.itemData.name;
  }

  openDetailes(Id){
    this.detailFor = this.itemServices.getItemDetailes(Id)
    console.log("id", this.detailFor);
  }

}
