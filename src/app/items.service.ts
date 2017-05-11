import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';




@Injectable()
export class ItemsService {
  msg =[]
  constructor(private http: Http) { }

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

getItemDetailes(id){
  switch (id) {
  case 334974:
      this.msg = [{
    	"code": 0,
    	"status": "API was executed successfully",
    	"data": {
    		"id": 334974,
    		"name": "Pokemon GO",
    		"photo_url": "https://static-s.aa-cdn.net/img/gp/20600005891187/wPfLmWBJwsPdBhsFXc8X4QZOOvePWjoOBLFXXCwyegjRwYOuabmG5cynthlW0HDgy9s=w300?v=1",
    		"summary": "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of \"de Finibus Bonorum et Malorum\" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, \"Lorem ipsum dolor sit amet..\", comes from a line in section 1.10.32.\n\nThe standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from \"de Finibus Bonorum et Malorum\" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham."
    	}
      }];
      break;
  case 335014:
      this.msg = [{
    	"code": 0,
    	"status": "API was executed successfully",
    	"data": {
    		"id": 335014,
    		"name": "Top Slots",
    		"photo_url": "https://static-s.aa-cdn.net/img/ios/584960704/35059877b924d41a85fcbe5075812660?v=1",
    		"summary": "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of \"de Finibus Bonorum et Malorum\" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, \"Lorem ipsum dolor sit amet..\", comes from a line in section 1.10.32.\n\nThe standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from \"de Finibus Bonorum et Malorum\" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham."
    	}
    }];
    break;
  case "334931":
        this.msg = [{
        	"code": 0,
        	"status": "API was executed successfully",
        	"data": {
        		"id": 334931,
        		"name": "King of Avalon",
        		"photo_url": "https://static-s.aa-cdn.net/img/gp/20600005692695/BHd53q1UNMhhdHPruHfzYtlqZuR0xbhy8P5klxnmg69juRz22qS8o23hDjKzkl3rviQ=w300?v=1",
        		"summary": "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of \"de Finibus Bonorum et Malorum\" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, \"Lorem ipsum dolor sit amet..\", comes from a line in section 1.10.32.\n\nThe standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from \"de Finibus Bonorum et Malorum\" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham."
        	}
        }];
        break;
    default:
      this.msg =[{
	"code": 0,
	"status": "API was executed successfully",
	"data": null
}];
  }
  return this.msg;
}

}



// let serverdata = this.http.get("http://interview.cignalio.com/rest/app/list")
//     .map(res => res.json())
//     //...errors if any
//    .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
//
// return [serverdata];
