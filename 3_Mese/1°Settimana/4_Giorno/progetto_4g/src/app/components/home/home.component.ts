import { Component } from '@angular/core';
import { iPost } from '../i-post';
import { iObj } from '../i-obj';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  post_array: Array<iPost> = [];
  array_di_post: Array<iPost> = [];


  ngOnInit() {
    this.get_post()
    ;
  }

  async get_post(): Promise<Array<iPost>> {
    let response = await fetch('../../../assets/db.json');
    let post = <iObj>await response.json();
    this.post_array = post.posts;
    this.random_numero(post.posts)
    return this.post_array;
  }

  random_numero = (array:iPost[]): iPost[] => {
    let numeri: Array<number> = [];
    while (numeri.length < 4) {
      let numero = Math.floor((Math.random()) * 30);
      if (!numeri.includes(numero)){
        numeri.push(numero);
    }}
    console.log(numeri)
    for (let i = 0; i < numeri.length; i++) {
      this.array_di_post.push(array[numeri[i]])
    }
    console.log(this.array_di_post)
    return this.array_di_post
  };
}


// mischia = (post_array: Array<iPost>) => {
//   for (let i = post_array.length - 1; i > 0; i--) {
//     const n = Math.floor(Math.random() * (i + 1));
//     [post_array[i], post_array[n]] = [post_array[n], post_array[i]];
//   }
//   return this.post_array;
// };
