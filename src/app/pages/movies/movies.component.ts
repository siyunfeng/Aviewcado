import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../../services/movies.service';
import { Movie } from '../../models/movie';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrl: './movies.component.scss'
})
export class MoviesComponent implements OnInit {
  movies: Movie[] = [];

  constructor(private moviesService: MoviesService) {}

  ngOnInit(): void {
    this.getMoviesByPage(1);
  }

  getMoviesByPage(page: number) {
    this.moviesService.searchMovies(page).subscribe((movies) => (this.movies = movies));
  }

  paginate(event: any) {
    this.getMoviesByPage(event.page + 1);
  }
}
