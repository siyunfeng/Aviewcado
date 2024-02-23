import { Component, Input } from '@angular/core';
import { Item } from '../../models/item';

@Component({
  selector: 'items-banner',
  templateUrl: './items-banner.component.html',
  styleUrl: './items-banner.component.scss'
})
export class ItemsBannerComponent {
  @Input() items: Item[] = [];
  @Input() bannerType: string = '';
}
