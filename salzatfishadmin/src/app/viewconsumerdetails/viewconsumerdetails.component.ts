import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ConsumerDetails } from 'src/Models/ConsumerDetails';
import { ConsumerService } from '../consumer.service';

@Component({
  selector: 'app-viewconsumerdetails',
  templateUrl: './viewconsumerdetails.component.html',
  styleUrls: ['./viewconsumerdetails.component.scss']
})
export class ViewconsumerdetailsComponent implements OnInit {

  consumerDetails = new Array<ConsumerDetails>();
  constructor(private consumerService: ConsumerService) { }

  ngOnInit(): void {
    this.getConsumerDetails();
  }

  getConsumerDetails()
  {
    debugger;
    this.consumerService.getConsumerDetails().subscribe((r: any) => {
      for(let i = 0; i< r.length;i++)
      {
        let cDetails = new ConsumerDetails(r[i].name,r[i].company,r[i].email,r[i].phnNumber,r[i].address,r[i].comments);
        this.consumerDetails.push(cDetails);
      }    
      debugger;  
    });
  }

}
