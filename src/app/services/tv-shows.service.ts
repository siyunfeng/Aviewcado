import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TvShow, TvShowCredits, TvShowDTO, TvShowImages, TvShowVideoDTO } from '../models/tvshow';
import { GenresDTO } from '../models/genre';
import { of, switchMap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TvshowsService {
  baseUrl: string = 'https://api.themoviedb.org/3';
  apiKey: string = '29a81657e07cee53699e4fd1e78a310d';

  constructor(private http: HttpClient) {}

  getTvShows(type: string = 'upcoming', count: number = 12) {
    return this.http
      .get<TvShowDTO>(`${this.baseUrl}/tv/${type}?api_key=${this.apiKey}`)
      .pipe(switchMap((data) => of(data.results.slice(0, count))));
  }

  searchTvShows(page: number, searchValue?: string) {
    const uri = searchValue ? '/search/tv' : '/tv/popular';
    return this.http
      .get<TvShowDTO>(`${this.baseUrl}${uri}?page=${page}&query=${searchValue}&api_key=${this.apiKey}`)
      .pipe(switchMap((data) => of(data.results)));
  }

  getTvShowById(id: string) {
    return this.http.get<TvShow>(`${this.baseUrl}/tv/${id}?api_key=${this.apiKey}`);
  }

  getTvShowVideos(id: string) {
    return this.http
      .get<TvShowVideoDTO>(`${this.baseUrl}/tv/${id}/videos?api_key=${this.apiKey}`)
      .pipe(switchMap((data) => of(data.results)));
  }

  getTvShowImages(id: string) {
    return this.http.get<TvShowImages>(`${this.baseUrl}/tv/${id}/images?api_key=${this.apiKey}`);
  }

  getTvShowCredits(id: string) {
    return this.http.get<TvShowCredits>(`${this.baseUrl}/tv/${id}/credits?api_key=${this.apiKey}`);
  }

  getSimilarTvShows(id: string) {
    return this.http
      .get<TvShowDTO>(`${this.baseUrl}/tv/${id}/similar?api_key=${this.apiKey}`)
      .pipe(switchMap((data) => of(data.results.slice(0, 12))));
  }

  getTvShowGenres() {
    return this.http
      .get<GenresDTO>(`${this.baseUrl}/genre/tv/list?api_key=${this.apiKey}`)
      .pipe(switchMap((data) => of(data.genres)));
  }

  getTvShowsByGenre(genreId: string, page: number) {
    return this.http
      .get<TvShowDTO>(`${this.baseUrl}/discover/tv?with_genres=${genreId}&page=${page}&api_key=${this.apiKey}`)
      .pipe(switchMap((data) => of(data.results)));
  }
}
