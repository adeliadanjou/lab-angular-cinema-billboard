import { Injectable } from '@angular/core';
import {movies} from 'sample-movies.js';
import { MoviesInterface} from 'app/interfaces/movie'


@Injectable()
export class MoviesService {
movies: Array<MoviesInterface> = movies

  constructor() { }

  getMovies(){ return this.movies}

  getMovie(id){
 
   movies.forEach(movie => {

    if(id === movie.id){
      return movie
    }
     
   });
  }
}
