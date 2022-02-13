import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ConsumerDetails } from 'src/Models/ConsumerDetails';

@Injectable({
  providedIn: 'root'
})
export class ConsumerService {

  constructor(private httpClient:HttpClient) { }

  saveConsumerDetails(consumerDetails:ConsumerDetails)
  {    
    return this.httpClient.post("https://www.salzatfishlimited.com/api/registration.php",consumerDetails, {responseType:'json'});
  }

  getConsumerDetails()
  {    
    return this.httpClient.get("https://www.salzatfishlimited.com/api/consumerdetails.php", {responseType:'json'});
  }
  
}
