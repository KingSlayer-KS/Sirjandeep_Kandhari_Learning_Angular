import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { Item } from '../models/item.model';
import { contentList } from '../data/items'; // Importing mock data

@Injectable({
  providedIn: 'root',
})
export class ContentService {

  // Retrieve all items
  getContentList(): Observable<Item[]> {
    return of(contentList);
  }

  // Retrieve a specific item by ID
  getContentById(id: number): Observable<Item | undefined> {
    const foundItem = contentList.find(item => item.id === id);
    return of(foundItem);
  }

  // Add a new item with unique ID check
  addContent(newItem: Item): Observable<Item[]> {
    if (!this.isUniqueId(newItem.id)) {
      return throwError(() => new Error('ID must be unique'));
    }
    contentList.push(newItem);
    return of(contentList);
  }

  // Update an existing item
  updateContent(updatedItem: Item): Observable<Item[]> {
    const index = contentList.findIndex(item => item.id === updatedItem.id);
    if (index !== -1) {
      contentList[index] = { ...contentList[index], ...updatedItem };
    } else {
      return throwError(() => new Error('Item not found'));
    }
    return of(contentList);
  }

  // Delete an item by ID
  deleteContent(id: number): Observable<Item | undefined> {
    const index = contentList.findIndex(item => item.id === id);
    if (index !== -1) {
      const removedItem = contentList.splice(index, 1)[0];
      return of(removedItem);
    }
    return of(undefined);
  }

  // Helper method to ensure ID uniqueness
  private isUniqueId(id: number): boolean {
    return !contentList.some(item => item.id === id);
  }
}
