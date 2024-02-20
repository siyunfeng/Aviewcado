import { Component, Input, OnInit } from '@angular/core';
import { MoviesService } from '../../services/movies.service';
import { ActivatedRoute } from '@angular/router';
import { Movie, Genre, MovieVideo, MovieImages } from '../../models/movie';
import { IMAGE_SIZE } from '../../constants/image-size';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrl: './movie.component.scss'
})
export class MovieComponent implements OnInit {
  movie: Movie | null = null;
  movieVideos: MovieVideo[] = [];
  movieImages: MovieImages | null = null;
  imageSize = IMAGE_SIZE;

  constructor(private route: ActivatedRoute, private moviesService: MoviesService) {}

  ngOnInit(): void {
    this.route.params.subscribe(({ id }) => {
      this.getMovie(id);
      this.getMovieVideos(id);
      this.getMovieImages(id);
    });
  }

  getMovie(id: string) {
    this.moviesService.getMovieById(id).subscribe((data) => (this.movie = data));
  }

  getMovieVideos(id: string) {
    this.moviesService.getMovieVideos(id).subscribe((data) => (this.movieVideos = data));
  }

  getMovieImages(id: string) {
    this.moviesService.getMovieImages(id).subscribe((data) => (this.movieImages = data));
  }
}
