import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { take } from 'rxjs';
import { TvshowsService } from '../../services/tv-shows.service';
import { convertTvShowToItem } from '../../models/tvshow';
import { Item } from '../../models/item';

@Component({
  selector: 'tv-shows',
  templateUrl: './tv-shows.component.html',
  styleUrl: './tv-shows.component.scss'
})
export class TvShowsComponent implements OnInit {
  tvShows: Item[] = [];
  genreId: string | null = null;
  searchValue: string | null = null;

  constructor(private tvShowsService: TvshowsService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.params.pipe(take(1)).subscribe(({ genreId }) => {
      if (genreId) {
        this.genreId = genreId;
        this.getTvShowsByGenre(genreId, 1);
      } else {
        this.getTvShowsByPage(1);
      }
    });
  }

  getTvShowsByPage(page: number, searchInput?: string) {
    this.tvShowsService.searchTvShows(page, searchInput).subscribe((tvShows) => {
      this.tvShows = tvShows.map((tvShow) => convertTvShowToItem(tvShow));
    });
  }

  getTvShowsByGenre(genreId: string, page: number) {
    this.tvShowsService.getTvShowsByGenre(genreId, page).subscribe((tvShows) => {
      this.tvShows = tvShows.map((tvShow) => convertTvShowToItem(tvShow));
    });
  }

  paginate(event: any) {
    const pageNum = event.page + 1;

    if (this.genreId) {
      this.getTvShowsByGenre(this.genreId, pageNum);
    } else {
      if (this.searchValue) {
        this.getTvShowsByPage(pageNum, this.searchValue);
      } else {
        this.getTvShowsByPage(pageNum);
      }
    }
  }

  searchInputChange() {
    if (this.searchValue) this.getTvShowsByPage(1, this.searchValue);
  }
}
