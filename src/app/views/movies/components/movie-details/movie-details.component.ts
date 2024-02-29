import { Component, OnInit } from '@angular/core';
import { MovieService } from '../../movies-service';
import { ActivatedRoute } from '@angular/router';
import { CategoryService } from 'src/app/views/categories/categories-service';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit {
  movieDetails:any
  categoryDetails: any
  movieId:any

  constructor(private movieService:MovieService,
    private route:ActivatedRoute,
    private categoryService:CategoryService
    ) {
      this.route.queryParams.subscribe(params =>{
        this.movieId = params['movieId'];
      });
     }

  ngOnInit(): void {
    this.fetchMovieDetails()
  }

  fetchMovieDetails(){
    const numericMovieId = parseInt(this.movieId, 10);
    this.movieDetails = this.movieService.getMovieById(numericMovieId);
    // Assuming there's a categoryId property in movieDetails, you can use it to get category details
    if (this.movieDetails) {
      this.categoryDetails = this.categoryService.getCategoryById(this.movieDetails.categoryId);
    }
  }

}
