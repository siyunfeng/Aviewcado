import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { TvShowsComponent } from './tv-shows.component';
import { PaginatorModule } from 'primeng/paginator';

describe('TvShowsComponent', () => {
  let component: TvShowsComponent;
  let fixture: ComponentFixture<TvShowsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, RouterTestingModule, PaginatorModule],
      declarations: [TvShowsComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(TvShowsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
