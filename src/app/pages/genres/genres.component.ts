import { Component, OnInit } from '@angular/core';
import { Genre } from '../../models/genre';
import { MoviesService } from '../../services/movies.service';

@Component({
  selector: 'genres',
  templateUrl: './genres.component.html',
  styleUrl: './genres.component.scss'
})
export class GenresComponent implements OnInit {
  genres: Genre[] = [];

  constructor(private moviesService: MoviesService) {}

  ngOnInit(): void {
    this.moviesService.getMovieGenres().subscribe((data) => (this.genres = data));
  }
}
