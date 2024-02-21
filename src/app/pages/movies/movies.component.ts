import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../../services/movies.service';
import { Movie } from '../../models/movie';
import { ActivatedRoute } from '@angular/router';
import { take } from 'rxjs';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrl: './movies.component.scss'
})
export class MoviesComponent implements OnInit {
  movies: Movie[] = [];

  constructor(private moviesService: MoviesService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.params.pipe(take(1)).subscribe(({ genreId }) => {
      if (genreId) {
        this.getMoviesByGenre(genreId);
      } else {
        this.getMoviesByPage(1);
      }
    });
  }

  getMoviesByPage(page: number) {
    this.moviesService.searchMovies(page).subscribe((movies) => (this.movies = movies));
  }

  paginate(event: any) {
    this.getMoviesByPage(event.page + 1);
  }

  getMoviesByGenre(genreId: string) {
    this.moviesService.getMoviesByGenre(genreId).subscribe((movies) => (this.movies = movies));
  }
}
