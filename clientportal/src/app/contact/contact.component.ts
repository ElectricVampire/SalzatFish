import { Component, OnInit } from '@angular/core';
import { ContactserviceService } from '../contactservice.service';
import { contactDetails } from '../Models/ContactDetails';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor(private contactService: ContactserviceService) { }
  emailSendResponse: boolean=false;
  isFirstLoad: boolean = true;
  isLoading:boolean=false;
  name='';
  email='';
  subject='';
  message='';
  phone='';
  ngOnInit(): void {
  }

  sendEmail()
  {
    this.isLoading = true;
    this.isFirstLoad =true;
    let cnt = new contactDetails(this.name,this.email,this.message,this.subject,this.phone);
    this.contactService.sendContactEmail(cnt).subscribe(r =>
      {
        debugger;
        this.isFirstLoad = false;
        this.isLoading = false;
        this.name='';
        this.email='';
        this.subject='';
        this.message='';
        this.phone='';
        if(r == "1")
        {
          this.emailSendResponse = true;
        }
        else
        {
          this.emailSendResponse = false;
        }
        
      });
  }

}
