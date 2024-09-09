import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CeramicsComponent } from './ceramics/ceramics.component';
import { PaintingComponent } from './painting/painting.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'ceramics', component: CeramicsComponent },
  { path: 'painting', component: PaintingComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent }
];
