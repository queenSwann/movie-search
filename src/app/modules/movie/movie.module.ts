import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovieListMainComponent } from './containers/movie-list-main/movie-list-main.component';
import { MovieDetailComponent } from './component/movie-detail/movie-detail.component';
import { MovieListComponent } from './component/movie-list/movie-list.component';
import { RouterModule } from '@angular/router';
import { routes } from './movie.routes';
import { SharedModule } from 'src/app/shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Ng2SmartTableModule } from 'ng2-smart-table';


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
    FormsModule, 
    ReactiveFormsModule,
    Ng2SmartTableModule
  ]
})
export class MovieModule { }
