import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Movie, MovieCredits, MovieDTO, MovieImages, MovieReviewsDTO, MovieVideoDTO } from '../models/movie';
import { GenresDTO } from '../models/genre';
import { of, switchMap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {
  baseUrl: string = 'https://api.themoviedb.org/3';
  apiKey: string = '29a81657e07cee53699e4fd1e78a310d';

  constructor(private http: HttpClient) {}

  getMovies(type: string = 'upcoming', count: number = 12) {
    return this.http
      .get<MovieDTO>(`${this.baseUrl}/movie/${type}?api_key=${this.apiKey}`)
      .pipe(switchMap((data) => of(data.results.slice(0, count))));
  }

  searchMovies(page: number, searchValue?: string) {
    const uri = searchValue ? '/search/movie' : '/movie/popular';
    return this.http
      .get<MovieDTO>(`${this.baseUrl}${uri}?page=${page}&query=${searchValue}&api_key=${this.apiKey}`)
      .pipe(switchMap((data) => of(data.results)));
  }

  getMovieById(id: string) {
    return this.http.get<Movie>(`${this.baseUrl}/movie/${id}?api_key=${this.apiKey}`);
  }

  getMovieVideos(id: string) {
    return this.http
      .get<MovieVideoDTO>(`${this.baseUrl}/movie/${id}/videos?api_key=${this.apiKey}`)
      .pipe(switchMap((data) => of(data.results)));
  }

  getMovieImages(id: string) {
    return this.http.get<MovieImages>(`${this.baseUrl}/movie/${id}/images?api_key=${this.apiKey}`);
  }

  getMovieCredits(id: string) {
    return this.http.get<MovieCredits>(`${this.baseUrl}/movie/${id}/credits?api_key=${this.apiKey}`);
  }

  getSimilarMovies(id: string) {
    return this.http
      .get<MovieDTO>(`${this.baseUrl}/movie/${id}/similar?api_key=${this.apiKey}`)
      .pipe(switchMap((data) => of(data.results.slice(0, 12))));
  }

  getMovieGenres() {
    return this.http
      .get<GenresDTO>(`${this.baseUrl}/genre/movie/list?api_key=${this.apiKey}`)
      .pipe(switchMap((data) => of(data.genres)));
  }

  getMoviesByGenre(genreId: string, page: number) {
    return this.http
      .get<MovieDTO>(`${this.baseUrl}/discover/movie?with_genres=${genreId}&page=${page}&api_key=${this.apiKey}`)
      .pipe(switchMap((data) => of(data.results)));
  }

  getMovieReviews(id: string) {
    return this.http
      .get<MovieReviewsDTO>(`${this.baseUrl}/movie/${id}/reviews?api_key=${this.apiKey}`)
      .pipe(switchMap((data) => of(data.results)));
  }
}
