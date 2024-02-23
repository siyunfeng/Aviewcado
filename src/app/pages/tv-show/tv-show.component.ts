import { Component, OnInit, OnDestroy } from '@angular/core';
import { TvshowsService } from '../../services/tv-shows.service';
import { ActivatedRoute } from '@angular/router';
import { TvShow, TvShowVideo, TvShowImages, TvShowCredits, convertTvShowToItem } from '../../models/tvshow';
import { Item } from '../../models/item';
import { IMAGE_SIZE } from '../../constants/image-size';
import { first } from 'rxjs';

@Component({
  selector: 'tv-show',
  templateUrl: './tv-show.component.html',
  styleUrl: './tv-show.component.scss'
})
export class TvShowComponent implements OnInit, OnDestroy {
  tvShow: TvShow | null = null;
  tvShowBanner: Item | null = null;
  tvShowVideos: TvShowVideo[] = [];
  tvShowImages: TvShowImages | null = null;
  tvShowCredits: TvShowCredits | null = null;
  similarTvShows: Item[] = [];

  imageSize = IMAGE_SIZE;

  constructor(private route: ActivatedRoute, private tvShowServices: TvshowsService) {}

  ngOnInit(): void {
    this.route.params.pipe(first()).subscribe(({ id }) => {
      this.getTvShow(id);
      this.getTvShowVideos(id);
      this.getTvShowImages(id);
      this.getTvShowCredits(id);
      this.getSimilarTvShows(id);
    });
  }

  ngOnDestroy(): void {}

  getTvShow(id: string) {
    this.tvShowServices.getTvShowById(id).subscribe((data) => {
      if (data) this.tvShowBanner = convertTvShowToItem(data);
      this.tvShow = data;
    });
  }

  getTvShowVideos(id: string) {
    this.tvShowServices.getTvShowVideos(id).subscribe((data) => (this.tvShowVideos = data));
  }

  getTvShowImages(id: string) {
    this.tvShowServices.getTvShowImages(id).subscribe((data) => (this.tvShowImages = data));
  }

  getTvShowCredits(id: string) {
    this.tvShowServices.getTvShowCredits(id).subscribe((data) => (this.tvShowCredits = data));
  }

  getSimilarTvShows(id: string) {
    this.tvShowServices.getSimilarTvShows(id).subscribe((tvshows) => {
      this.similarTvShows = tvshows.map((tvshow) => convertTvShowToItem(tvshow));
    });
  }
}
