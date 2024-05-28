import { Component } from '@angular/core';
import { PostInterface } from 'src/interfaces/post.interface';
import { ServerService } from '../server.service';

@Component({
  selector: 'app-inactive-posts',
  templateUrl: './inactive-posts.component.html',
  styleUrls: ['./inactive-posts.component.scss']
})
export class InactivePostsComponent {

  constructor(private post_service_inact: ServerService) {
  }
  inactive:PostInterface[] = this.post_service_inact.inactivePosts


}
