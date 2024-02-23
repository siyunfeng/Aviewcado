import { Component, Input } from '@angular/core';
import { Item } from '../../models/item';
import { IMAGE_SIZE } from '../../constants/image-size';

@Component({
  selector: 'item',
  templateUrl: './item.component.html',
  styleUrl: './item.component.scss'
})
export class ItemComponent {
  @Input() itemData: Item | null = null;

  readonly imageSize = IMAGE_SIZE;
}
