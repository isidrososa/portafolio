import { RouterModule, Routes } from '@angular/router';

import { PortfolioComponent, AboutComponent, ItemComponent } from './components/index.pages';


const app_routes: Routes = [
  { path: 'home', component: PortfolioComponent },
  { path: 'about', component: AboutComponent },
  { path: 'product', component: ItemComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'home' },
];

export const appRouting = RouterModule.forRoot(app_routes, { useHash: true });