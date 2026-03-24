import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Dashboard } from '../models/dashboard.model';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiUrl = environment.apiUrl;
  constructor(private http: HttpClient) { }

  getDashboard(): Observable<Dashboard>{
    return this.http.get<Dashboard>(`${this.apiUrl}/dashboard`);
  }
  getProducts(params?: any): Observable<any>{
    return this.http.get<any>(`${this.apiUrl}/products`, {params});
  }
  getCategories(): Observable<any>{
    return this.http.get<any>(`${this.apiUrl}/categories`);
  }
  getReports(params: {start_date?: string, end_date?: string}): Observable<any>{
    return this.http.get<any>(`${this.apiUrl}/reports`, {params});
  }
}