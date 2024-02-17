import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../../services/movies.service';
import { Movie } from '../../models/movie';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {
  popularMovies: Movie[] = [];
  upcomingMovies: Movie[] = [];
  topRatedMovies: Movie[] = [];

  constructor(private moviesService: MoviesService) {}

  ngOnInit(): void {
    this.moviesService.getMovies('popular').subscribe((data: any) => (this.popularMovies = data.results));
    this.moviesService.getMovies('upcoming').subscribe((data: any) => (this.upcomingMovies = data.results));
    this.moviesService.getMovies('top_rated').subscribe((data: any) => (this.topRatedMovies = data.results));
  }
}
