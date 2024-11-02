import { Component, Input, Output, EventEmitter } from '@angular/core';
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
  @Output() delete = new EventEmitter<number>();

  deleteItem(): void {
    if (this.contentItem?.id) {
      this.delete.emit(this.contentItem.id);
    }
  }
}
