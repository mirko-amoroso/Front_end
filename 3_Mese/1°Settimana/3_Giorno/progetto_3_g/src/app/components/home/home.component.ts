import { Component } from '@angular/core';
import { iPost } from '../model/post';
import { iList } from '../model/list';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  post_array: Array<iPost> = [];
  array_numeri: Array<number> = [];

  ngOnInit() {
    this.get_post().then(()=>{
      this.mischia(this.post_array)
    });
    // this.random_numero();
  }

  async get_post(): Promise<Array<iPost>> {
    let response = await fetch('../../../assets/db.json');
    let post = <iList>await response.json();
    this.post_array = post.posts;
    this.mischia(this.post_array)
    return this.post_array;
  }

  mischia = (post_array:Array<iPost>) => {
    for (let i = post_array.length - 1; i > 0; i--) {
      const n = Math.floor(Math.random() * (i + 1));
      [post_array[i], post_array[n]] = [post_array[n], post_array[i]];
    }
    return this.post_array;
  };

  //  random_numero = (): Array<number> => {
  //    let numeri: Array<number> = [];
  //    for (let i = 0; i < 4; i++) {
  //      let vari_numeri: number= Math.floor((Math.random() + 1) * 30);
  //      if (!numeri.includes(vari_numeri))
  //        numeri.push(vari_numeri);
  //    }
  //    this.array_numeri = numeri;
  //    return numeri;
  //  };

  
}
