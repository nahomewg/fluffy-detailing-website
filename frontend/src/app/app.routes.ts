import { Routes } from '@angular/router';
import { HomeComponent } from '../components/home/home.component';
import { PricingComponent } from '../components/pricing/pricing.component';

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full'},
  { path: 'about', redirectTo: '/home' },
  { path: 'home', component: HomeComponent },
  { path: 'pricing', component: PricingComponent}
];
