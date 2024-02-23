import { Genre } from './genre';
import { Item } from './item';

export interface Movie {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
  runtime: number;
  status: string;
  revenue: number;
  tagline: string;
  genres: Genre[];
}

export interface MovieDTO {
  page: number;
  results: Movie[];
  total_results: number;
  total_pages: number;
}

export interface MovieVideoDTO {
  id: number;
  results: MovieVideo[];
}

export interface MovieVideo {
  site: string;
  key: string;
}

export interface MovieImages {
  backdrops: {
    file_path: string;
  }[];
}

export interface MovieCredits {
  cast: {
    name: string;
    profile_path: string;
    character: string;
  }[];
  crew: {
    name: string;
    profile_path: string;
    job: string;
  }[];
}

export const convertMovieToItem = (movie: Movie): Item => {
  return {
    id: movie.id,
    title: movie.title,
    poster_path: movie.poster_path,
    backdrop_path: movie.backdrop_path,
    overview: movie.overview,
    release_date: movie.release_date,
    vote_average: movie.vote_average,
    vote_count: movie.vote_count,
    route_path: '/movie/' + movie.id
  };
};
