import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule, MatLabel } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { ApiService } from '../../../services/api.service';
import { Category } from '../../../models/product.model';

@Component({
  selector: 'app-edit-product',
  imports: [ReactiveFormsModule, MatInputModule, MatLabel, MatFormFieldModule, MatSelectModule],
  templateUrl: './edit-product.component.html',
  styleUrl: './edit-product.component.scss'
})
export class EditProductComponent {
  readonly dialogRef = inject(MatDialogRef<EditProductComponent>);
  readonly data = inject(MAT_DIALOG_DATA);
  private apiService = inject(ApiService)
  private fb = inject(FormBuilder)
  categories: Category[] = []
  formProduct: FormGroup

  constructor() {
    console.log(this.data);
    
    this.formProduct = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      category: ['', [Validators.required]],
      description: ['', [Validators.minLength(3)]],
      price: ['', [Validators.required, Validators.min(0.5)]],
    })
  }

  onNoClick(): void { this.dialogRef.close(); }

  ngOnInit(){
    this.loadCategories();
  }
  loadCategories(){
    this.apiService.getCategories().subscribe({
      next: (response) => {
        console.log(response);
        this.categories = response;
      },
      error: (error) => {
        console.log(error);
      }
    })
  }
}
