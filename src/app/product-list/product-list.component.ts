import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Product } from '../Models/Product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  public productList : Product[]= [];

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http
    .get<Product[]>("http://localhost:5000/api/product")
    .subscribe(products => {
      this.productList = products;
    });

  }

}
