import { Component, OnInit } from '@angular/core';

@Component({
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  pageTitle = "Product Detail";

  constructor() { }

  ngOnInit(): void {
  }

}
