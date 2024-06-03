import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from '../homepage/homepage.component';
import { InactivePostsComponent } from './inactive-posts.component';

const routes: Routes = [
  {
    path:"",
    component: InactivePostsComponent
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InactivePostsRoutingModule { }
