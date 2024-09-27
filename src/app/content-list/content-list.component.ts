import { Component } from '@angular/core';
import { Item } from '../models/item.model';

@Component({
  selector: 'app-content-list',
  standalone: true,
  imports: [],
  templateUrl: './content-list.component.html',
  styleUrl: './content-list.component.css'
})
export class ContentListComponent {
  contentList: Item[] = [
    { id: 1, name: 'Macbook', description: 'High-end performece laptop apple', price: 1500, inStock: true, category: 'Electronics' },
    { id: 2, name: 'iphone', description: 'Latest model smartphone apple', price: 1000, category: 'Electronics' },
    { id: 3, name: 'airpods', description: 'Noise-cancelling headphones apple', price: 200, inStock: false, category: 'Accessories' },
    { id: 4, name: 'ipad', description: 'tablet apple', price: 250, inStock: true, category: 'Furniture' },
    { id: 5, name: 'chair', description: 'Standing desk', price: 300, category: 'Furniture' },
    { id: 6, name: 'Monitor', description: '4K monitor', price: 400, inStock: true, category: 'Electronics' }
  ];
}
