import { Movie } from './movie';

export interface TvShow extends Movie {
  name: string;
}

export interface TvShowDTO {
  page: number;
  results: TvShow[];
  total_results: number;
  total_pages: number;
}

export interface Genre {
  id: number;
  name: string;
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
