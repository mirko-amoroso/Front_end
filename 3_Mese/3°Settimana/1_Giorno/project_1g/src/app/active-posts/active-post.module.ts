import { ActivePostsRoutingModule } from './active-posts-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivePostsComponent } from './active-posts.component';



@NgModule({
  declarations: [
    ActivePostsComponent
  ],
  imports: [
    CommonModule,
    ActivePostsRoutingModule
  ]
})
export class ActivePostModule { }
