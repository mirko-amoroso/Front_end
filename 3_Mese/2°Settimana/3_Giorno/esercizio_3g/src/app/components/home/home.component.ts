import { Component } from '@angular/core';
import { ServerService } from '../../server.service';
import { map, Observable } from 'rxjs';
import { iProduct } from '../modules/i-products';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  constructor(private all_products: ServerService) {}

  array_products: iProduct[] = []

  ngOnInit() {
    let variabile = this.all_products
      .get_all()
      .pipe(map((i) => i.products));
      variabile.subscribe(p => {
        this.array_products = p
      })
  }
}
