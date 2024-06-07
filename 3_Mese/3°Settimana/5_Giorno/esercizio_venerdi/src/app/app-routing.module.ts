import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then((m) => m.AuthModule),
  },
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then((m) => m.HomeModule),
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
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
