import { Component } from '@angular/core';
import { iPost } from '../model/post';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  post_array: Array<iPost> = [];
  array_numeri: Array<number> = [];

  ngOnInit() {
    this.get_post();
    this.random_numero();
  }

  async get_post(): Promise<Array<iPost>> {
    let response = await fetch('../../../assets/db.json');
    let post = await response.json();
    this.post_array = post.posts;
    return this.post_array;
  }

  random_numero = (): Array<number> => {
    let numeri: Array<number> = [];
    for (let i = 0; numeri.length < 4; i++) {

      numeri.push(Math.floor((Math.random() + 1) * 30));
    }
    this.array_numeri = numeri;
    return numeri
  };
}
