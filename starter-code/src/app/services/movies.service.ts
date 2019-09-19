import { Injectable } from '@angular/core';
import {movies} from 'sample-movies.js';
import { MoviesInterface} from 'app/interfaces/movie'


@Injectable()
export class MoviesService {
movies: Array<MoviesInterface> = movies
movieItem: Object
  constructor() { }

  getMovies(){ return this.movies}

  getMovie(id: number){
  
    return this.movieItem = this.movies.filter(mov => mov.id == id)[0]
    
  }


}


