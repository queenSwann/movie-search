import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovieListMainComponent } from './containers/movie-list-main/movie-list-main.component';
import { MovieDetailComponent } from './component/movie-detail/movie-detail.component';
import { MovieListComponent } from './component/movie-list/movie-list.component';
import { RouterModule } from '@angular/router';
import { routes } from './movie.routes';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    MovieListMainComponent,
    MovieDetailComponent,
    MovieListComponent
  ],
  imports: [
    CommonModule, 
    RouterModule.forChild(routes), 
    SharedModule, 
  ]
})
export class MovieModule { }
