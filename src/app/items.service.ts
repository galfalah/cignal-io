import { Injectable } from '@angular/core';

@Injectable()
export class ItemsService {

  constructor() { }

  getItemsFromServer(){
  return[
    {
"code": 0,
"status": "API was executed successfully",
"data": [
  {
    "id": 335014,
    "name": "Top Slots",
    "photo_url": "https://static-s.aa-cdn.net/img/ios/584960704/35059877b924d41a85fcbe5075812660?v=1"
  },
  {
    "id": 334974,
    "name": "Pokemon GO",
    "photo_url": "https://static-s.aa-cdn.net/img/gp/20600005891187/wPfLmWBJwsPdBhsFXc8X4QZOOvePWjoOBLFXXCwyegjRwYOuabmG5cynthlW0HDgy9s=w300?v=1"
  },
  {
    "id": 334931,
    "name": "King of Avalon",
    "photo_url": "https://static-s.aa-cdn.net/img/gp/20600005692695/BHd53q1UNMhhdHPruHfzYtlqZuR0xbhy8P5klxnmg69juRz22qS8o23hDjKzkl3rviQ=w300?v=1"
  },
]
}];
}

}
