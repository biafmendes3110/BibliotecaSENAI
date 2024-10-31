import { Injectable } from '@angular/core';
import { Iproducts } from './iproducts';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  private products: Iproducts[] = [
    { id: 1, name: 'A garota do lago', price: 45.0, description: 'Robert Stevenson', image:'../garota.jpg'},
    { id: 2, name: 'Orgulho e Preconceito', price: 20.5, description: 'Jane Austen', image:'../image1.png'},
    { id: 3, name: 'É assim que acaba', price: 90.0, description: 'Coolen Hoover', image:'../Acaba.jpg'},
    { id: 1, name: 'A Biblioteca da meia-noite', price: 45.0, description: 'Robert Stevenson', image:'../Biblioteca.jpg'},
    { id: 2, name: 'Todo esse tempo', price: 20.5, description: 'Rafael Montes', image:'../tempo.jpg'},
    { id: 3, name: 'Em busca de nós mesmos', price: 90.0, description: 'Rafael Montes', image:'../mesmos.jpg'},
    { id: 1, name: 'Orgulho e preconceito', price: 45.0, description: 'Jane Austen', image:'../image1.png'},
    { id: 2, name: 'É assim que acaba', price: 90.0, description: 'Coolen Hoover', image:'../Acaba.jpg'},
    { id: 3, name: 'A garota do lago', price: 45.0, description: 'Robert Stevenson', image:'../garota.jpg'},
    { id: 1, name: 'A Biblioteca da meia-noite', price: 45.0, description: 'Robert Stevenson', image:'../Biblioteca.jpg'},
    { id: 2, name: 'Todo esse tempo', price: 20.5, description: 'Rafael Montes', image:'../tempo.jpg'},
    { id: 3, name: 'A garota do lago', price: 45.0, description: 'Robert Stevenson', image:'../garota.jpg'},
  ];

  getProducts(): Iproducts[]{
    return this.products;
  }
}
