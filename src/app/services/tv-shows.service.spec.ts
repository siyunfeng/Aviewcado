import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TvshowsService } from './tv-shows.service';

describe('TvshowsService', () => {
  let service: TvshowsService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(TvshowsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
