import { Injectable } from '@nestjs/common';
import { Product } from './products.module';

@Injectable()
export class ProductsService {
  products: Product[] = [];

  insertProduct(title: string, desc: string, price: number) {
    const newProduct = new Product(new Date().toString(), title, desc, price);
    this.products.push(newProduct);
  }
}
