import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { InactivePostComponent } from './components/inactive-post/inactive-post.component';
import { ActivePostComponent } from './components/active-post/active-post.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { PostDetailComponent } from './components/post-detail/post-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    InactivePostComponent,
    ActivePostComponent,
    NavbarComponent,
    PostDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
