import { RouterModule, Routes } from "@angular/router";
import { MoviesComponent } from "./movies.component";
import { MovieDetailsComponent } from "./components/movie-details/movie-details.component";
import { EditMovieComponent } from "./components/edit-movie/edit-movie.component";
import { AllMoviesComponent } from "./components/all-movies/all-movies.component";
import { CreateMovieComponent } from "./components/create-movie/create-movie.component";



const routes: Routes = [
  {
    path: 'movies', component: MoviesComponent, children: [
    {path:'all-movies',component:AllMoviesComponent},
    {path:'create-movie',component:CreateMovieComponent},
    {path:'edit-movie/:id',component:EditMovieComponent},
    {path:'movie-details/:id',component:MovieDetailsComponent}
    ]
  }
];
export const MoviesRoutingModule = RouterModule.forChild(routes);
