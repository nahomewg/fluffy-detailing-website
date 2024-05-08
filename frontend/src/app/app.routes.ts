import { Routes } from '@angular/router';
import { HomeComponent } from '../components/home/home.component';
import { PricingComponent } from '../components/pricing/pricing.component';
import { GalleryComponent } from '../components/gallery/gallery.component';

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full'},
  { path: 'about', redirectTo: '/home' },
  { path: 'home', component: HomeComponent },
  { path: 'pricing', component: PricingComponent, children: [
    { path: 'contact', redirectTo: '/pricing/?section=contact'}
  ]},
  { path: 'gallery', component: GalleryComponent, children: [
    { path: 'contact', redirectTo: '/gallery/?section=contact'}
  ]}
];
