import { Component, OnDestroy, OnInit } from '@angular/core';
import { MoviesService } from '../../services/movies.service';
import { ActivatedRoute } from '@angular/router';
import { Movie, MovieVideo, MovieImages, MovieCredits, MovieReview } from '../../models/movie';
import { IMAGE_SIZE } from '../../constants/image-size';
import { first } from 'rxjs';

@Component({
  selector: 'movie',
  templateUrl: './movie.component.html',
  styleUrl: './movie.component.scss'
})
export class MovieComponent implements OnInit, OnDestroy {
  movie: Movie | null = null;
  movieVideos: MovieVideo[] = [];
  movieImages: MovieImages | null = null;
  movieCredits: MovieCredits | null = null;
  similarMovies: Movie[] = [];
  movieReviews: MovieReview[] | null = null;

  imageSize = IMAGE_SIZE;

  constructor(private route: ActivatedRoute, private moviesService: MoviesService) {}

  ngOnInit(): void {
    this.route.params.pipe(first()).subscribe(({ id }) => {
      this.getMovie(id);
      this.getMovieVideos(id);
      this.getMovieImages(id);
      this.getMovieCredits(id);
      this.getMovieReviews(id);
      this.getSimilarMovies(id);
    });
  }

  ngOnDestroy(): void {}

  getMovie(id: string) {
    this.moviesService.getMovieById(id).subscribe((data) => (this.movie = data));
  }

  getMovieVideos(id: string) {
    this.moviesService.getMovieVideos(id).subscribe((data) => (this.movieVideos = data));
  }

  getMovieImages(id: string) {
    this.moviesService.getMovieImages(id).subscribe((data) => (this.movieImages = data));
  }

  getMovieCredits(id: string) {
    this.moviesService.getMovieCredits(id).subscribe((data) => (this.movieCredits = data));
  }

  getMovieReviews(id: string) {
    this.moviesService.getMovieReviews(id).subscribe((data) => (this.movieReviews = data));
  }

  getSimilarMovies(id: string) {
    this.moviesService.getSimilarMovies(id).subscribe((data) => (this.similarMovies = data));
  }
}
