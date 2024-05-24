import { Component } from '@angular/core';
import { iObj } from '../i-obj';
import { iPost } from '../i-post';

@Component({
  selector: 'app-active-post',
  templateUrl: './active-post.component.html',
  styleUrl: './active-post.component.scss',
})
export class ActivePostComponent {
  post_array: Array<iPost> = [];
  active_array: Array<iPost> = [];

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
      if (activ_post.active === true) {
        this.active_array.push(activ_post);
      }
    });
    return this.active_array;
  }
}
