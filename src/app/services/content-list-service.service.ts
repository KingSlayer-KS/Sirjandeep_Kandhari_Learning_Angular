import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { Item } from '../models/item.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ContentService {

  private apiUrl = 'api/items';  // Points to the InMemoryDataService API

  constructor(private http: HttpClient) {}

  // Retrieve all items
  getContentList(): Observable<Item[]> {
    return this.http.get<Item[]>(this.apiUrl);
  }

  // Retrieve a specific item by ID
  getContentById(id: number): Observable<Item | undefined> {
    return this.http.get<Item | undefined>(`${this.apiUrl}/${id}`);
  }

  // Add a new item
  addContent(newItem: Item): Observable<Item> {
    return this.http.post<Item>(this.apiUrl, newItem);
  }

  // Update an existing item
  updateContent(updatedItem: Item): Observable<Item> {
    return this.http.put<Item>(`${this.apiUrl}/${updatedItem.id}`, updatedItem);
  }

  // Delete an item by ID
  deleteContent(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
