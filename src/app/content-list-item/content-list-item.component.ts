import { Component, Input } from '@angular/core';
import { Item } from '../models/item.model';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-content-list-item',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './content-list-item.component.html',
  styleUrls: ['./content-list-item.component.css']
})
export class ContentListItemComponent {
  @Input() contentItem?: Item;  
}
