import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../../services/products.service';
import { DescriptionProduct } from '../../interfaces/description-product.interface';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {

  product: DescriptionProduct;
  id: string;

  constructor( private route: ActivatedRoute, public productsService: ProductsService) { }

  ngOnInit(): void {
    this.route.params
      .subscribe(params => {
        this.productsService.getProduct(params['id'])
          .subscribe((product: DescriptionProduct) => {
            this.id = params['id']
            this.product = product
          })
      })
  }

}
