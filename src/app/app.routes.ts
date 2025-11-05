import { Routes } from '@angular/router';
import { WelcomePage } from './welcome-page/welcome-page';

export const routes: Routes = [
    { path: 'welcome', component: WelcomePage },
    { path: '', redirectTo: '/welcome', pathMatch: 'full' }
];
