import { Component, inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ApiService } from '../../../services/api.service';

@Component({
  selector: 'app-charts-product',
  imports: [],
  templateUrl: './charts-product.component.html',
  styleUrl: './charts-product.component.scss'
})
export class ChartsProductComponent {
  readonly dialogRef = inject(MatDialogRef<ChartsProductComponent>)
  readonly data = inject(MAT_DIALOG_DATA)
  private apiService = inject(ApiService)

  constructor() {
    console.log(this.data);
    
  }

}
