import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../../services/movies.service';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss']
})
export class MovieListComponent implements OnInit {

  private settings = "hola";
  constructor(private movieService: MoviesService) { }
  
  async ngOnInit(){
    
  }

  public async loadData(title: string){
    let list : [] = await this.movieService.loadMovies("lord of rings");

  }

}
