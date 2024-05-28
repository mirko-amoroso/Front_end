import { Component, OnInit } from '@angular/core';
import { PostInterface } from 'src/interfaces/post.interface';
import { ServerService } from '../server.service';

@Component({
  selector: 'app-active-posts',
  templateUrl: './active-posts.component.html',
  styleUrls: ['./active-posts.component.scss'],
})
export class ActivePostsComponent {

  constructor(private post_service_act: ServerService) {}

  active = this.post_service_act.activePosts;
}
