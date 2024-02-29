import { Component, OnInit } from '@angular/core';
import { MovieService } from '../../movies-service';

@Component({
  selector: 'app-all-movies',
  templateUrl: './all-movies.component.html',
  styleUrls: ['./all-movies.component.css']
})
export class AllMoviesComponent implements OnInit {
  movieList:any = []
  deleteMovieModal:boolean = false
  clickedMovieData:any

  constructor(private movieService:MovieService) { }

  ngOnInit(): void {
    this.fetchMovies();
  }

  fetchMovies(){
    this.movieList = this.movieService.getMovies();
  }

  deleteMovie(item:any){
    this.clickedMovieData = item
    this.deleteMovieModal = true
  }

  deleteMovieFromTable(movieId: number){
    this.movieService.deleteMovie(movieId);
    this.fetchMovies();
    window.alert('movie deleted, click ok to see all movies')
    this.deleteMovieModal = false
  }

  closeDeleteMovieModal(){
    this.deleteMovieModal = false
  }

}
