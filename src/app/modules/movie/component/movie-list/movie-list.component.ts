import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../../services/movies.service';
import { LocalDataSource } from 'ng2-smart-table';
import { IMovie } from '../../interfaces/movie.interface';
import { Router } from '@angular/router';
import { ROUTES } from 'src/app/shared/constants/routes';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss']
})
export class MovieListComponent implements OnInit {

  public movies: IMovie[] = [];
  private actual: number;
  public nextMovies: IMovie[] = [];
  public prevMovies: IMovie[] = [];
  public movieSelected: IMovie;
  public title: string;
  public hidden: boolean[];
  public error: boolean;

  constructor(private movieService: MoviesService, private router: Router) { }
  
  async ngOnInit(){
    this.allHidden()
    this.actual = 1;
    this.title = "";
  }  

  public async loadData(){
    this.allHidden();
    this.movies = await this.movieService.loadMovies(this.title, this.actual);
    this.error = this.movies.length<1? true :false;
    this.loadNext();
    this.loadPrev();

  }

  get hasNext(){
    return this.nextMovies.length>0;
  }

  get hasPrev(){
    return this.prevMovies.length>0;
  }

  private async loadNext(){
    if(this.movies.length==10){
      this.nextMovies = await this.movieService.loadMovies(this.title, this.actual+1);
    }else{
      this.nextMovies = [];
    }
  }

  private async loadPrev(){
    if(this.actual > 1){
      this.prevMovies = await this.movieService.loadMovies(this.title, this.actual-1);
    }else{
      this.prevMovies = [];
    }
  }

  public async viewMovie(movie: IMovie, pos: number) {
    if(this.hidden[pos]){
      this.allHidden();
      this.hidden[pos] = false;
      
    }else{
      this.hidden[pos] = true;
    }
  }

  public setTitle(title: any){
    this.title = title.value;
    this.clear();
  }

  public clear(){
    this.allHidden();
    this.actual=1;
    this.nextMovies=[];
    this.prevMovies=[];
    this.movies = [];
  }

  public next(){
    if(this.hasNext){
      this.actual++;
      this.loadData();
    }
  }

  public prev(){
    if(this.hasPrev){
      this.actual--;
      this.loadData();
    }
  }

  private allHidden(){
    this.hidden = [true, true, true, true, true, true, true, true, true, true];
  }

}
