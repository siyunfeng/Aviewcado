import { Component, Input, OnInit } from '@angular/core';
import { Movie } from '../../models/movie';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { interval, take } from 'rxjs';

@Component({
  selector: 'slider',
  templateUrl: './slider.component.html',
  styleUrl: './slider.component.scss',
  animations: [trigger('slideFade', [state('void', style({ opacity: 0 })), transition('void <=> *', [animate('1s')])])]
})
export class SliderComponent implements OnInit {
  @Input() items: Movie[] = [];

  curSlideIndex: number = 0;

  ngOnInit(): void {
    const source = interval(5000);
    const numSlides = source.pipe(take(this.items.length - 1));

    numSlides.subscribe(() => (this.curSlideIndex = ++this.curSlideIndex % this.items.length));
  }
}
