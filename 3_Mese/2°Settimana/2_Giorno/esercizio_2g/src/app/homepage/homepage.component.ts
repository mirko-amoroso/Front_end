import { Component, ViewChild } from '@angular/core';
import { PostInterface } from 'src/interfaces/post.interface';
import { SinglePostComponent } from '../single-post/single-post.component';
import { ServerService } from '../server.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss'],
})
export class HomepageComponent {

  @ViewChild("singlePost") singlePost!: SinglePostComponent

  constructor(private post_service_home: ServerService) {}
  posts = this.post_service_home.posts
  post = this.post_service_home.topPost
  related = this.post_service_home.getRandomPosts(4)



  editPost() {
    alert("Edit successful!")
  }
}


