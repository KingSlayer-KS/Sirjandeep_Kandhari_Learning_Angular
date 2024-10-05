import { Component, OnInit } from '@angular/core'; // Import OnInit to use lifecycle hooks
import { Item } from '../models/item.model';
import { ContentService } from './content-list-service.service';  // Import ContentService
import { ContentListItemComponent } from "../content-list-item/content-list-item.component";

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
    this.contentService.getContentList().subscribe(data => {
      this.contentList = data; 
    });
  }
}
