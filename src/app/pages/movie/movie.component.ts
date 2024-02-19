import { Component, Input, OnInit } from '@angular/core';
import { MoviesService } from '../../services/movies.service';
import { ActivatedRoute } from '@angular/router';
import { Movie, Genre } from '../../models/movie';
import { IMAGE_SIZE } from '../../constants/image-size';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrl: './movie.component.scss'
})
export class MovieComponent implements OnInit {
  movie: Movie | null = null;
  imageSize = IMAGE_SIZE;

  constructor(private route: ActivatedRoute, private moviesService: MoviesService) {}

  ngOnInit(): void {
    this.route.params.subscribe(({ id }) => {
      this.getMovie(id);
    });
  }

  getMovie(id: string) {
    this.moviesService.getMovieById(id).subscribe((data) => {
      this.movie = data;
      console.log('movie => ', this.movie);
    });
  }
}
