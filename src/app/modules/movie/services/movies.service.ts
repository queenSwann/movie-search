import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {
  private apikey = 'b40b1e58';
  constructor(public httpClient: HttpClient) { }

  public async loadMovies(title: string, page: number){    
    const url = `http://www.omdbapi.com/?s=${title}&page=${page}&type=movie&apikey=${this.apikey}`
    const res = await fetch(`${url}`);
    const data = await res.json();

    if(data.Response == "True") {
      return data.Search;
    }else{
      return [];
    }
  }

  public async getMovieById(id: string){    
    const url = `http://www.omdbapi.com/?i=${id}&apikey=${this.apikey}`
    const res = await fetch(`${url}`);
    const data = await res.json();
    return data;
  }
}
