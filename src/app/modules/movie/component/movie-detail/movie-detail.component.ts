import { Component, Input, OnInit } from '@angular/core';
import { IMovie } from '../../interfaces/movie.interface';
import { MoviesService } from '../../services/movies.service';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.scss']
})
export class MovieDetailComponent implements OnInit {

  @Input() movie: IMovie;
  public movieSelected: IMovie;
  public image = 'https://t3.ftcdn.net/jpg/03/34/83/22/360_F_334832255_IMxvzYRygjd20VlSaIAFZrQWjozQH6BQ.jpg';
  constructor(private movieService: MoviesService) { }

  ngOnInit(): void {
  }

  async ngOnChanges(){
    this.movieSelected = await this.movieService.getMovieById(this.movie.imdbID);
    if(this.movieSelected.Poster != 'N/A') this.image = this.movieSelected.Poster;
  }

}
