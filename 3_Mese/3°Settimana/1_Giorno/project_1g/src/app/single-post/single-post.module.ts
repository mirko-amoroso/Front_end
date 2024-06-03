import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SinglePostComponent } from './single-post.component';



@NgModule({
  declarations: [
    SinglePostComponent
  ],
  imports: [
    CommonModule,
    SinglePostModule
  ]
})
export class SinglePostModule { }
