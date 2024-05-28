import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ActivePostComponent } from './components/active-post/active-post.component';
import { InactivePostComponent } from './components/inactive-post/inactive-post.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/home', //redireziona l'utente
    pathMatch: 'full', //per far si che il path vuoto venga riconosciuto correttamente
  },
  {
    path: 'home',
    component: HomeComponent,
    title: 'home',
  },
  {
    path: 'active-post',
    component: ActivePostComponent,
    title: 'active-post',
  },
  {
    path: 'inactive-post',
    component: InactivePostComponent,
    title: 'inactive-post',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
