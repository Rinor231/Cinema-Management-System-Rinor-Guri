import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot, Router } from '@angular/router';
import { MovieService } from '../../movies-service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CategoryService } from 'src/app/views/categories/categories-service';

@Component({
  selector: 'app-edit-movie',
  templateUrl: './edit-movie.component.html',
  styleUrls: ['./edit-movie.component.css']
})
export class EditMovieComponent implements OnInit {
  editMovieForm:any = FormGroup;
  movieDetails:any
  movieId:any
  categoryList: any[] = [];
  constructor(private route:ActivatedRoute,
    private movieService:MovieService,
    private router:Router,
    private categoryService:CategoryService) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params =>{
      this.movieId = params['movieId'] || 0;
      this.fetchMovieDetails();
    });

    this.categoryList = this.categoryService.getCategories();

    this.editMovieForm = new FormGroup({
      title: new FormControl('', Validators.required),
      categoryId: new FormControl('', Validators.required),
      releasedate: new FormControl('', Validators.required),
      director: new FormControl('', Validators.required),
      image: new FormControl('', Validators.required)
    });
    this.fetchMovieDetails()
  }

  fetchMovieDetails(){
    this.movieDetails =
    this.movieService.getMovieById(JSON.parse(this.movieId));
    this.fillInputs()
  }

  fillInputs(){
    this.editMovieForm.get('title').setValue(this.movieDetails.title);
    this.editMovieForm.get('categoryId').setValue(this.movieDetails.categoryId);
    this.editMovieForm.get('releasedate').setValue(this.movieDetails.releasedate);
    this.editMovieForm.get('director').setValue(this.movieDetails.director);
    this.editMovieForm.get('image').setValue(this.movieDetails.image)
  }

  onSubmit(){
    if (this.editMovieForm.valid){
      try {
        let payload = {
          id:JSON.parse(this.movieId),
          title:this.editMovieForm.value.title,
          categoryId:this.editMovieForm.value.categoryId,
          releasedate:this.editMovieForm.value.releasedate,
          director:this.editMovieForm.value.director,
          image:this.editMovieForm.value.image
        }

        this.movieService.updateMovie(payload);
        this.editMovieForm.reset();
        window.alert('movie edited. Click OK to see all movies.');
        this.router.navigateByUrl('/movies/all-movies');
      } catch(error:any) {
        console.error('Error editing use:', error);
        window.alert('Failed to edit movie. Please try again.');

      }
    }
  }

}
