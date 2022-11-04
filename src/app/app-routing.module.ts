import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ROUTES } from './shared/constants/routes';

const ALL_ROUTES: Routes = [
  {
    path: ROUTES.MOVIE.path,
    loadChildren: () => import('./modules/movie/movie.module').then((m) => m.MovieModule),
  }
];

@NgModule({
  imports: [RouterModule.forRoot(ALL_ROUTES, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
