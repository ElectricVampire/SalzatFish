import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { AddconsumerdetailsComponent } from './addconsumerdetails/addconsumerdetails.component';
import { ViewconsumerdetailsComponent } from './viewconsumerdetails/viewconsumerdetails.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AddconsumerdetailsComponent,
    ViewconsumerdetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgbModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }