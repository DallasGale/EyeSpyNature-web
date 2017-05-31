import { Routes } from '@angular/router'
import { LandingPageComponent } from './landing/landing.component'

export const appRoutes: Routes = [
    { path: '', redirectTo: '/', pathMatch: 'full' },
    { path: '', component: LandingPageComponent }
];