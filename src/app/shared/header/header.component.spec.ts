import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { HeaderComponent } from './header.component';
import { DebugElement } from '@angular/core';
import { RouterTestingModule } from '@angular/router/testing';
import { Router, RouterLink } from '@angular/router';
import { By } from '@angular/platform-browser';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;
  let compiled: HTMLElement;
  let routerLinks: any;
  let linkDes: DebugElement[];

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule, RouterLink],
      declarations: [HeaderComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    compiled = fixture.nativeElement as HTMLElement;

    linkDes = fixture.debugElement.queryAll(By.directive(RouterLink));
    routerLinks = linkDes.map((de) => de.injector.get(RouterLink));
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render title', () => {
    const title = compiled.querySelector('.navbar-logo');
    expect(title?.querySelector('span')?.textContent).toContain('Aviewcado');
  });

  it('can get navigation lists', () => {
    expect(routerLinks.length).withContext('should have 5 routerLinks').toBe(5);
    expect(routerLinks[0].href).withContext('should navigate to Home page').toBe('/');
    expect(routerLinks[1].href).withContext('should navigate to Home page').toBe('/');
    expect(routerLinks[2].href).withContext('should navigate to Movies page').toBe('/movies');
    expect(routerLinks[3].href).withContext('should navigate to TV Shows page').toBe('/tvshows');
    expect(routerLinks[4].href).withContext('should navigate to Genres page').toBe('/genres');
  });

  it('can click Movies link from the navbar', fakeAsync(() => {
    const moviesLink = linkDes[2];

    TestBed.inject(Router).resetConfig([{ path: '**', children: [] }]);
    moviesLink.triggerEventHandler('click', { button: 0 });
    tick();
    fixture.detectChanges();

    expect(TestBed.inject(Router).url).toBe('/movies');
  }));
});
