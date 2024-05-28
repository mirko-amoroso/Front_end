import { Component, ElementRef, ContentChild, Input } from '@angular/core';
import { PostsService } from '../../posts.service';
import { iPost } from '../models/i-post';


@Component({
  selector: 'app-single-post',
  templateUrl: './single-post.component.html',
  styleUrl: './single-post.component.scss',
})
export class SinglePostComponent {
  // post_arr_all: iPost[] = [];

  constructor(private post_service: PostsService) {}

  ngOnInit() {

    // this.post_arr_all = this.post_service.posts;
    // @Input() pizzaInput!:{gusto:string, prezzo:number};
  }
  @Input() post!: iPost

  @ContentChild('inputHome') inputHome!:ElementRef

  // ngAfterViewInit() {
  //   const elemento = this.inputHome.nativeElement;
  // }
}


