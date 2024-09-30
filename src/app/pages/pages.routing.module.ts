import { Routes } from '@angular/router';
import { CategoriesComponent } from './categories/categories.component';
import { AppDashboardComponent } from './dashboard/products.component';

export const PagesRoutes: Routes = [
  {
    path: 'products',
    component: AppDashboardComponent,
    data: {
      title: 'Starter Page',
    },
  },
  {
    path: 'categories',
    component: CategoriesComponent,
    
  },
];
