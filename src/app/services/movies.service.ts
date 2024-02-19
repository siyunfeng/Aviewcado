import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Movie, MovieDTO } from '../models/movie';
import { of, switchMap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {
  baseUrl: string = 'https://api.themoviedb.org/3/';
  apiKey: string = '29a81657e07cee53699e4fd1e78a310d';

  constructor(private http: HttpClient) {}

  getMovies(type: string = 'upcoming', count: number = 12) {
    return this.http
      .get<MovieDTO>(`${this.baseUrl}movie/${type}?api_key=${this.apiKey}`)
      .pipe(switchMap((data) => of(data.results.slice(0, count))));
  }

  searchMovies(page: number) {
    return this.http
      .get<MovieDTO>(`${this.baseUrl}movie/popular?page=${page}&api_key=${this.apiKey}`)
      .pipe(switchMap((data) => of(data.results)));
  }

  getMovieById(id: string) {
    return this.http.get<Movie>(`${this.baseUrl}movie/${id}?api_key=${this.apiKey}`);
  }
}
