import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ContentService } from '../services/content-list-service.service';
import { Item } from '../models/item.model';

@Component({
  selector: 'app-modify-product',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './modify-list.component.html',
  styleUrls: ['./modify-list.component.css']
})
export class ModifyListComponent implements OnInit {
  productForm: FormGroup;
  product: Item | undefined;

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private contentService: ContentService,
    private router: Router
  ) {
    this.productForm = this.fb.group({
      id: [{ value: '', disabled: true }],
      name: ['', Validators.required],
      description: [''],
      price: ['', Validators.required],
      category: [''],
      inStock: [false]
    });
  }

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    if (id) {
      this.contentService.getContentById(id).subscribe(product => {
        if (product) {
          this.product = product;
          this.productForm.patchValue(product);
        }
      });
    }
  }

  onSubmit(): void {
    if (this.productForm.valid) {
      const updatedProduct: Item = {
        ...this.product,
        ...this.productForm.getRawValue()
      };
      this.contentService.updateContent(updatedProduct).subscribe(() => {
        this.router.navigate(['/']);
      });
    }
  }

  onDelete(): void {
    const id = this.productForm.get('id')?.value;
    if (id) {
      this.contentService.deleteContent(id).subscribe(() => {
        this.router.navigate(['/']);
      });
    }
  }

  navigateToProductList(): void {
    this.router.navigate(['/']);
  }
}
