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

  getContentById(id: number): Observable<Item | undefined> {
    const foundItem = contentList.find(item => item.id === id);
    return of(foundItem);   }

  addContent(newItem: Item): Observable<Item[]> {
    contentList.push(newItem);  
    return of(contentList);  
  }

  updateContent(updatedItem: Item): Observable<Item[]> {
    const index = contentList.findIndex(item => item.id === updatedItem.id);
    if (index !== -1) {
      contentList[index] = updatedItem; 
    }
    return of(contentList);  
  }

  deleteContent(id: number): Observable<Item | undefined> {
    const index = contentList.findIndex(item => item.id === id);
    if (index !== -1) {
      const removedItem = contentList.splice(index, 1)[0];  
      return of(removedItem); 
    }
    return of(undefined); 
  }
}
