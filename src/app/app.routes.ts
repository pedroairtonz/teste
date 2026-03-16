import { Routes } from '@angular/router';
import { authGuard } from './guards/auth.guard';

export const routes: Routes = [
  {
    path: 'login',
    loadComponent: () =>
      import('./components/login/login.component').then((m) => m.LoginComponent),
  },
  {
    path: '',
    canActivate: [authGuard],
    children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      {
        path: 'dashboard',
        loadComponent: () =>
          import('./components/dashboard/dashboard.component').then(
            (m) => m.DashboardComponent,
          ),
      },
      {
        path: 'pedidos',
        loadComponent: () =>
          import('./components/orders/orders.component').then(
            (m) => m.OrdersComponent,
          ),
      },
      {
        path: 'produtos',
        loadComponent: () =>
          import('./components/products/products.component').then(
            (m) => m.ProductsComponent,
          ),
      },
      {
        path: 'relatorios',
        loadComponent: () =>
          import('./components/reports/reports.component').then(
            (m) => m.ReportsComponent,
          ),
      },
    ],
  },
  {
    path: '**',
    redirectTo: 'dashboard',
  }
];