import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MovieService } from '../../movies-service';
import { CategoryService } from 'src/app/views/categories/categories-service';

@Component({
  selector: 'app-create-movie',
  templateUrl: './create-movie.component.html',
  styleUrls: ['./create-movie.component.css']
})
export class CreateMovieComponent implements OnInit {
  createMovieForm:any = FormGroup
  categoryList: any[] = [];
  constructor(
    private movieService:MovieService,
    private router:Router,
    private categoryService:CategoryService
  ) { }
  ngOnInit() {
    this.createMovieForm = new FormGroup({
      title: new FormControl('', Validators.required),
      categoryId: new FormControl('', Validators.required),
      releasedate: new FormControl('', Validators.required),
      director: new FormControl('', Validators.required),
      image: new FormControl ('', Validators.required)
    });

    this.categoryList = this.categoryService.getCategories();
  }
  onSubmit() {
    if (this.createMovieForm.valid) {
      try {
        this.movieService.addMovie(this.createMovieForm.value);
        this.createMovieForm.reset();
        window.alert('movie created. Click OK to see all movies.');
        this.router.navigateByUrl('/movies/all-movies');
      }
      catch (error:any) {
        if (error.message === 'A movie with these details alreadt exists') {
          window.alert('A movie with these details already exists. Please check your input.')
        } else {
          console.log('Error creating movie:', error);
          window.alert('Failed to create movie. Please try again.');
        }
      }
    } else {
      window.alert('Form is not valid. Please check your input.');
    }
  }
}
