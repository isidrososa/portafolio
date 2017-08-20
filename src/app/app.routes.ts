import { RouterModule, Routes } from '@angular/router';

import { PortfolioComponent, AboutComponent, ItemComponent, SearchComponent } from './components/index.pages';

const app_routes: Routes = [
  { path: 'home', component: PortfolioComponent },
  { path: 'about', component: AboutComponent },
  { path: 'product/:id', component: ItemComponent },
  { path: 'search/:param', component: SearchComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'home' },
];

export const appRouting = RouterModule.forRoot(app_routes, { useHash: true });