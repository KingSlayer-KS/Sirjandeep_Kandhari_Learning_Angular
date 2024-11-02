import { Component, OnInit } from '@angular/core';
import { Item } from '../models/item.model';
import { ContentService } from '../services/content-list-service.service';
import { ContentListItemComponent } from '../content-list-item/content-list-item.component';

@Component({
  selector: 'app-content-list',
  standalone: true,
  imports: [ContentListItemComponent],
  templateUrl: './content-list.component.html',
  styleUrls: ['./content-list.component.css']
})
export class ContentListComponent implements OnInit {
  contentList: Item[] = [];

  constructor(private contentService: ContentService) {}

  ngOnInit(): void {
    this.loadContentList();
  }

  loadContentList(): void {
    this.contentService.getContentList().subscribe(data => {
      this.contentList = data;
    });
  }

  onDelete(itemId: number): void {
    this.contentService.deleteContent(itemId).subscribe(() => {
      this.loadContentList();  // Reload list after deletion
    });
  }
}
