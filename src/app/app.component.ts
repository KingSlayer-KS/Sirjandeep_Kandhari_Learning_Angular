import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Item } from './models/item.model';
import { ContentListComponent } from './content-list/content-list.component';
import { ContentListItemComponent } from './content-list-item/content-list-item.component'; 
import { ContentService } from './services/content-list-service.service'; 

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ContentListComponent, ContentListItemComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  name: string = 'Sirjan';
  sem: number = 3;
  selectedItem: Item | undefined;  
  constructor(private contentService: ContentService) {}

  ngOnInit(): void {
    const itemId = 1; 
    this.contentService.getContentById(itemId).subscribe(item => {
      this.selectedItem = item;  
    });
  }
}
