import { Route } from '@angular/router';
import { GetApi } from './pages/get-api/get-api';
import { DailyBookComponent } from './pages/daily-book/daily-book';
import { About } from './pages/about/about';

export const routes: Route[] = [
  { path: '', redirectTo: 'books', pathMatch: 'full' },
  { path: 'books', component: GetApi },
  { path: 'daily-book', component: DailyBookComponent },
  { path: 'about', component: About }
];
