import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../../services/movies.service';
import { TvshowsService } from '../../services/tv-shows.service';
import { Item } from '../../models/item';
import { convertMovieToItem } from '../../models/movie';
import { convertTvShowToItem } from '../../models/tvshow';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {
  popularMovies: Item[] = [];
  upcomingMovies: Item[] = [];
  topRatedMovies: Item[] = [];
  popularTvShows: Item[] = [];

  constructor(private moviesService: MoviesService, private tvShowsService: TvshowsService) {}

  ngOnInit(): void {
    this.moviesService.getMovies('popular').subscribe((movies) => {
      this.popularMovies = movies.map((movie) => convertMovieToItem(movie));
    });
    this.moviesService.getMovies('upcoming').subscribe((movies) => {
      this.upcomingMovies = movies.map((movie) => convertMovieToItem(movie));
    });
    this.moviesService.getMovies('top_rated').subscribe((movies) => {
      this.topRatedMovies = movies.map((movie) => convertMovieToItem(movie));
    });
    this.tvShowsService.getTvShows('popular').subscribe((tvShows) => {
      this.popularTvShows = tvShows.map((tvShow) => convertTvShowToItem(tvShow));
    });
  }
}
