import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { MoviesComponent } from './pages/movies/movies.component';
import { HttpClientModule, provideHttpClient, withFetch } from '@angular/common/http';
import { SliderComponent } from './components/slider/slider.component';
import { ItemsBannerComponent } from './components/items-banner/items-banner.component';
import { MovieItemComponent } from './components/movie-item/movie-item.component';

@NgModule({
  declarations: [AppComponent, HeaderComponent, FooterComponent, HomeComponent, MoviesComponent, SliderComponent, ItemsBannerComponent, MovieItemComponent],
  imports: [BrowserModule, BrowserAnimationsModule, AppRoutingModule, HttpClientModule],
  providers: [provideClientHydration(), provideHttpClient(withFetch())],
  bootstrap: [AppComponent]
})
export class AppModule {}
