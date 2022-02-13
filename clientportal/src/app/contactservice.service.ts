import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ContactserviceService {

  constructor(private httpClient: HttpClient) { }

  sendContactEmail(contactDetails:any)
  {    
    return this.httpClient.post("https://localhost/salzatfish/api/contact.php",contactDetails, {responseType:'json'});
  }
}
