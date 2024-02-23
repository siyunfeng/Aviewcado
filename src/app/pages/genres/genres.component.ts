import { Component, OnInit } from '@angular/core';
import { Genre } from '../../models/genre';
import { MoviesService } from '../../services/movies.service';
import { TvshowsService } from '../../services/tv-shows.service';

@Component({
  selector: 'genres',
  templateUrl: './genres.component.html',
  styleUrl: './genres.component.scss'
})
export class GenresComponent implements OnInit {
  movieGenres: Genre[] = [];
  tvShowGenres: Genre[] = [];

  constructor(private moviesService: MoviesService, private tvShowsService: TvshowsService) {}

  ngOnInit(): void {
    this.moviesService.getMovieGenres().subscribe((data) => (this.movieGenres = data));
    this.tvShowsService.getTvShowGenres().subscribe((data) => (this.tvShowGenres = data));
  }
}
