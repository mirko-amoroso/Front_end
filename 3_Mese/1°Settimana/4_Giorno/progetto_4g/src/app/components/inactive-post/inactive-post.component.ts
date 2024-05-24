import { Component } from '@angular/core';
import { iPost } from '../i-post';
import { iObj } from '../i-obj';

@Component({
  selector: 'app-inactive-post',
  templateUrl: './inactive-post.component.html',
  styleUrl: './inactive-post.component.scss'
})
export class InactivePostComponent {
  post_array: Array<iPost> = [];
  inactive_array: Array<iPost> = [];

  ngOnInit() {
    this.get_post();
  }

  async get_post(): Promise<iPost[]> {
    let response = await fetch('../../../assets/db.json');
    let post = <iObj>await response.json();
    this.post_array = post.posts;
    this.get_active(post.posts);
    return this.post_array;
  }

  get_active(array: iPost[]): iPost[] {
    array.forEach((activ_post) => {
      if (activ_post.active === false) {
        this.inactive_array.push(activ_post);
      }
    });
    return this.inactive_array;
  }
}
