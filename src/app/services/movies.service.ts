import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {
  baseUrl: string = 'https://api.themoviedb.org/3/';
  apiKey: string = '29a81657e07cee53699e4fd1e78a310d';

  constructor(private http: HttpClient) {}

  getMovies(type: string = 'upcoming') {
    return this.http.get(`${this.baseUrl}movie/${type}?api_key=${this.apiKey}`);
  }
}
