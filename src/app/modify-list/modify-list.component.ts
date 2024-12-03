import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { ContentService } from '../services/content-list-service.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Item } from '../models/item.model';
import { HighlightOnFocusDirective } from '../directives/highlight-on-focus.directive';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatTooltipModule } from '@angular/material/tooltip';

@Component({
  selector: 'app-modify',
  standalone: true,
  imports: [
    FormsModule,
    HighlightOnFocusDirective,
    ReactiveFormsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatCheckboxModule,
    MatTooltipModule,
  ],
  templateUrl: './modify-list.component.html',
  styleUrls: ['./modify-list.component.css']
})
export class ModifyListComponent implements OnInit {
  itemForm: FormGroup;
  isEditMode = false;
  errorMessage: string = '';

  constructor(
    private fb: FormBuilder,
    private contentService: ContentService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.itemForm = this.fb.group({
      id: ['', [Validators.required, Validators.pattern(/^[0-9]+$/)]],
      name: ['', [Validators.required, Validators.pattern(/^[a-zA-Z0-9 ]*$/)]],
      description: [''],
      price: ['', [Validators.required, Validators.min(0)]],
      category: [''],
      inStock: [false]
    });
  }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.isEditMode = true;
      this.contentService.getContentById(+id).subscribe(item => {
        if (item) {
          this.itemForm.patchValue(item);
        } else {
          this.errorMessage = 'Item not found';
        }
      });
    }
  }

  onSubmit(): void {
    if (this.itemForm.valid) {
      const item: Item = this.itemForm.value;
      if (this.isEditMode) {
        this.contentService.updateContent(item).subscribe({
          next: () => this.router.navigate(['/']),
          error: err => this.errorMessage = err.message
        });
      } else {
        this.contentService.addContent(item).subscribe({
          next: () => this.router.navigate(['/']),
          error: err => this.errorMessage = err.message
        });
      }
    }
  }
}
