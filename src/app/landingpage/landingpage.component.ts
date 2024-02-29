import { Component, OnInit } from '@angular/core';
import { MovieService } from '../views/movies/movies-service';

@Component({
  selector: 'app-landingpage',
  templateUrl: './landingpage.component.html',
  styleUrls: ['./landingpage.component.css']
})
export class LandingpageComponent implements OnInit {
  movieList:any = []
  

  constructor(private movieService:MovieService) { }

  ngOnInit(): void {
    this.fetchMovies()
  }

  fetchMovies(){
    this.movieList = this.movieService.getMovies();
  }

  categoryFilter( category: string){
    console.log(category)
    this.movieList = this.movieList.filter((movie: any) => movie.category === category)
  }

}
