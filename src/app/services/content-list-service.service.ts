import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { Item } from '../models/item.model';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ContentService {

  private apiUrl = 'api/products';  

  constructor(private http: HttpClient) {
    console.log("HTTP Client initialized");
  }

  // Retrieve all items
  getContentList(): Observable<Item[]> {
    return this.http.get<Item[]>(this.apiUrl).pipe(
      catchError(this.handleError)
    );
  }

  // Retrieve a specific item by ID
  getContentById(id: number): Observable<Item> {
    return this.http.get<Item>(`${this.apiUrl}/${id}`).pipe(
      catchError(this.handleError)
    );
  }

  // Add a new item
  addContent(newItem: Item): Observable<Item> {
    return this.http.post<Item>(this.apiUrl, newItem).pipe(
      catchError(this.handleError)
    );
  }

  // Update an existing item
  updateContent(updatedItem: Item): Observable<Item> {
    return this.http.put<Item>(`${this.apiUrl}/${updatedItem.id}`, updatedItem).pipe(
      catchError(this.handleError)
    );
  }

  // Delete an item by ID
  deleteContent(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`).pipe(
      catchError(this.handleError)
    );
  }

  private handleError(error: HttpErrorResponse) {
    console.error('API error:', error);
    return throwError(() => new Error('Server error, please try again.'));
  }
}
