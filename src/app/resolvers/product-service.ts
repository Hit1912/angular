import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { of } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class ProductService implements Resolve<any> {
  resolve() {
alert('UserResolver called!');
    return of({
        id: 101,
        pname: 'Laptop',
        price: 95000
    });  }}
