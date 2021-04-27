import { Component, OnInit } from '@angular/core';
import { MainService } from 'src/app/services/main.service';
@Component({
  selector: 'app-adm-products',
  templateUrl: './adm-products.component.html',
  styleUrls: ['./adm-products.component.scss']
})
export class AdmProductsComponent implements OnInit {

  constructor(public mainService: MainService) { }

  newProduct = {
    thumbnail: '',
    title: '',
    price: 0,
    category: ''
  };

  ngOnInit(): void {
    this.getProducts();
  }
  getProducts() {
    this.mainService.getProducts(this.mainService.productsRequest);
  }



}
