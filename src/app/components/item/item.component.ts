import { Component, Input } from '@angular/core';
import { Movie } from '../../models/movie';
import { IMAGE_SIZE } from '../../constants/image-size';

@Component({
  selector: 'item',
  templateUrl: './item.component.html',
  styleUrl: './item.component.scss'
})
export class ItemComponent {
  @Input() itemData: Movie | null = null;

  readonly imageSize = IMAGE_SIZE;
}
