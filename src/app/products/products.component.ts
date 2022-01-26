import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  constructor() { }

  productname = "Pomfret";
  ngOnInit(): void {
  }

  select(productName:string)
  {
    this.productname = productName;
  }

}
