import { LoginComponent } from './auth/login/login.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./auth/auth.module').then((m) => m.AuthModule),
  },
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then((m) => m.AuthModule),
  },
  {
    path: 'utenti',
    loadChildren: () =>
      import('./pages/utenti/utenti.module').then((m) => m.UtentiModule),
  },
  {
    path: 'profilo',
    loadChildren: () =>
      import('./pages/profilo/profilo.module').then((m) => m.ProfiloModule),
  },
  { path: 'film', loadChildren: () => import('./pages/film/film.module').then(m => m.FilmModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
