import { Component } from '@angular/core';
import { iPost } from '../models/i-post';
import { PostsService } from '../../posts.service';
// import { iObj } from '../i-obj';

@Component({
  selector: 'app-inactive-post',
  templateUrl: './inactive-post.component.html',
  styleUrl: './inactive-post.component.scss'
})
export class InactivePostComponent {
  inactive_array: Array<iPost> = [];
  post_arr_acti:iPost[] = []


  constructor(
    private post_service_inact : PostsService
  ){}



  ngOnInit() {
    this.post_arr_acti = this.post_service_inact.posts

    // this.get_post();
    this.get_inactive(this.post_arr_acti)
  }

  // async get_post(): Promise<iPost[]> {
  //   let response = await fetch('../../../assets/db.json');
  //   let post = <iObj>await response.json();
  //   this.post_array = post.posts;
  //   this.get_active(post.posts);
  //   return this.post_array;
  // }

  get_inactive(array: iPost[]): iPost[] {
    array.forEach((activ_post) => {
      if (activ_post.active === false) {
        this.inactive_array.push(activ_post);
      }
    });
    return this.inactive_array;
  }

}
