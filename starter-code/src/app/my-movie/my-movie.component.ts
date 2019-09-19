import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../services/movies.service'
import {Router, ActivatedRoute} from '@angular/router'

@Component({
  selector: 'app-my-movie',
  templateUrl: './my-movie.component.html',
  styleUrls: ['./my-movie.component.css'],
    providers: [MoviesService]
})
export class MyMovieComponent implements OnInit {

  id: number;
  movieItems: any

  constructor(public moviesService: MoviesService,  public route: ActivatedRoute) { 
    this.route.params.subscribe((params)=> this.id = params.id );


  }

  ngOnInit() {

    this.movieItems = this.moviesService.getMovie(this.id)

  }
  



}
