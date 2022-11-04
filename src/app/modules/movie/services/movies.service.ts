import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor(public httpClient: HttpClient) { }

  public async loadMovies(title: string){    
    const apikey = 'b40b1e58';
    const url = `http://www.omdbapi.com/?s=${title}&page=1&apikey=${apikey}`
    const res = await fetch(`${url}`);
    const data = await res.json();

    if(data.Response == "True") {
      return data.Search;
    }else{
      return null;
    }
  }
}
