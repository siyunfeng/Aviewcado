import { Component, Input, OnInit } from '@angular/core';
import { Movie } from '../../models/movie';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'slider',
  templateUrl: './slider.component.html',
  styleUrl: './slider.component.scss',
  animations: [trigger('slideFade', [state('void', style({ opacity: 0 })), transition('void <=> *', [animate('1s')])])]
})
export class SliderComponent implements OnInit {
  @Input() items: Movie[] = [];

  curSlideIndex: number = 0;

  constructor() {}

  ngOnInit(): void {}
}
