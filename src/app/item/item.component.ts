import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  imageUrl;
  itemId;
  itemName;

  @Input() itemData;

  constructor() {
  }

  ngOnInit() {
      console.log(this.itemData)
      this.imageUrl=this.itemData.photo_url;
      this.itemId=this.itemData.id;
      this.itemName=this.itemData.name;
  }

  openDetailes(Id){
    console.log("id", Id);
  }

}
