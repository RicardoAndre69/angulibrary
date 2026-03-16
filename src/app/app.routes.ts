import { Route } from '@angular/router';
import { GetApi } from './pages/get-api/get-api';

export const routes: Route[] = [
  { path: '', redirectTo: 'books', pathMatch: 'full' },
  { path: 'books', component: GetApi }
];
