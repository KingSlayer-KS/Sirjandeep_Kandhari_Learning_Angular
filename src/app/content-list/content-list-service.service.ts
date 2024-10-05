import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Item } from '../models/item.model';
import { contentList } from '../data/items'; // Importing mock data

@Injectable({
  providedIn: 'root',
})
export class ContentService {
  getContentList(): Observable<Item[]> {
    return of(contentList);
  }
}
