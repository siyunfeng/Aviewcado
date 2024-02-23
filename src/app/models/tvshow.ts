import { Genre } from './genre';
import { Item } from './item';

export interface TvShow {
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
  name: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
  runtime: number;
  status: string;
  revenue: number;
  genres: Genre[];
}

export interface TvShowDTO {
  page: number;
  results: TvShow[];
  total_results: number;
  total_pages: number;
}

export interface TvShowVideoDTO {
  id: number;
  results: TvShowVideo[];
}

export interface TvShowVideo {
  site: string;
  key: string;
}

export interface TvShowImages {
  backdrops: {
    file_path: string;
  }[];
}

export interface TvShowCredits {
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

export const convertTvShowToItem = (tvShow: TvShow): Item => {
  return {
    id: tvShow.id,
    title: tvShow.name,
    poster_path: tvShow.poster_path,
    backdrop_path: tvShow.backdrop_path,
    overview: tvShow.overview,
    release_date: tvShow.release_date,
    vote_average: tvShow.vote_average,
    vote_count: tvShow.vote_count
  };
};
