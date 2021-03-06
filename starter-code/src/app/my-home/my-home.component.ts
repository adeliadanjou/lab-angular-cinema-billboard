import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../services/movies.service'
import {Router} from '@angular/router'

@Component({
  selector: 'app-my-home',
  templateUrl: './my-home.component.html',
  styleUrls: ['./my-home.component.css'],
  providers: [MoviesService]
})
export class MyHomeComponent implements OnInit {

  constructor(private moviesService: MoviesService, public router: Router) { }

  ngOnInit() {
  }

  goToMovie(id){
    this.router.navigate(['movie',id])
  }

}
