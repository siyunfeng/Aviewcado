import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { take } from 'rxjs';
import { MoviesService } from '../../services/movies.service';
import { convertMovieToItem } from '../../models/movie';
import { Item } from '../../models/item';

@Component({
  selector: 'movies',
  templateUrl: './movies.component.html',
  styleUrl: './movies.component.scss'
})
export class MoviesComponent implements OnInit {
  movies: Item[] = [];
  genreId: string | null = null;
  searchValue: string | null = null;

  constructor(private moviesService: MoviesService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.params.pipe(take(1)).subscribe(({ genreId }) => {
      if (genreId) {
        this.genreId = genreId;
        this.getMoviesByGenre(genreId, 1);
      } else {
        this.getMoviesByPage(1);
      }
    });
  }

  getMoviesByPage(page: number, searchInput?: string) {
    this.moviesService.searchMovies(page, searchInput).subscribe((movies) => {
      this.movies = movies.map((movie) => convertMovieToItem(movie));
    });
  }

  getMoviesByGenre(genreId: string, page: number) {
    this.moviesService.getMoviesByGenre(genreId, page).subscribe((movies) => {
      this.movies = movies.map((movie) => convertMovieToItem(movie));
    });
  }

  paginate(event: any) {
    const pageNum = event.page + 1;

    if (this.genreId) {
      this.getMoviesByGenre(this.genreId, pageNum);
    } else {
      if (this.searchValue) {
        this.getMoviesByPage(pageNum, this.searchValue);
      } else {
        this.getMoviesByPage(pageNum);
      }
    }
  }

  searchInputChange() {
    if (this.searchValue) this.getMoviesByPage(1, this.searchValue);
  }

  resetSearching() {
    this.searchValue = '';
    this.getMoviesByPage(1);
  }
}
