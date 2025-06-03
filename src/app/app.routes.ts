import { Routes } from '@angular/router';

import { HomeComponent } from '../app/src/components/home/home.component';
import { AboutComponent } from '../app/src/components/about/about.component';
import { ContactComponent } from '../app/src/components/contact/contact.component';


export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'about', component: AboutComponent },
    { path: 'contact', component: ContactComponent },
    { path: '**', redirectTo: '' }
  ];
