import { Component, OnInit } from '@angular/core';
import { ConsumerDetails } from 'src/Models/ConsumerDetails';
import { ConsumerService } from '../consumer.service';

@Component({
  selector: 'app-addconsumerdetails',
  templateUrl: './addconsumerdetails.component.html',
  styleUrls: ['./addconsumerdetails.component.scss']
})
export class AddconsumerdetailsComponent implements OnInit {

  constructor(private consumerService:ConsumerService) { }

  isFirstTimeLoad:boolean = true;
  isLoading:boolean = false;
  isResponseSuccess:boolean = false;

  name:string = '';
  companyname:string = '';
  email:string = '';
  phone:string = '';
  address:string = '';
  comments:string = '';

  ngOnInit(): void {
  }

  saveDetails()
  {
    let consumerDetails = new ConsumerDetails(this.name,this.companyname,this.email,this.phone,this.address,this.comments);
    this.isFirstTimeLoad = false;
    this.isLoading = true;
    this.consumerService.saveConsumerDetails(consumerDetails).subscribe((r: any) => {
      console.log(r);      
      debugger;
      this.isLoading = false;
      if(r.status = "failed")
      {
        this.isResponseSuccess =false;
      }
      else{
        this.isResponseSuccess =true;
      }
      
    });
  }

}
