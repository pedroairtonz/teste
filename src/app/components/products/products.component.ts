import { Component, inject } from '@angular/core';
import { Category, Product } from '../../models/product.model';
import { ApiService } from '../../services/api.service';
import { MatDialog } from '@angular/material/dialog';
import { EditProductComponent } from '../../dialog/products/edit-product/edit-product.component';

@Component({
  selector: 'app-products',
  imports: [],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss',
})
export class ProductsComponent {
  products: Product[] = [];
  categories: Category[] = []
  private apiService = inject(ApiService);
  readonly dialog = inject(MatDialog);

  constructor(){}

  ngOnInit(){
    this.apiService.getCategories().subscribe({
      next: (response) => {
        console.log(response);
        this.categories = response;
      },
      error: (error) => {
        console.log(error);
      }
    })
    this.apiService.getProducts().subscribe({
      next: (response) => {
        console.log(response);
        this.products = response.data;
      },
      error: (error) => {
        console.log(error);
      }
    });
  }
  searchProducts(params?: any) {
    this.apiService.getProducts(params).subscribe({
      next: (response) => {
        console.log(response);
        
        this.products = response.data;
      },
      error: (error) => {
        console.log(error);
      }
    })
  }
  openEditDialog(idProduct: number){
    const dialogRef = this.dialog.open(EditProductComponent, {
      data: { idProduct: idProduct }
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('Dialog fechado');
    })
  }
}
