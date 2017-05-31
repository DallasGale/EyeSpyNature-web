import { Routes } from '@angular/router'
// import { HeroComponent } from './hero/hero.component'
import { LandingPageComponent } from './landing/landing.component'
import { EventsListComponent } from './events/events-list.component'
import { EventDetailsComponent } from './events/event-details/event-details.component'

export const appRoutes: Routes = [
    { path: 'events', component: EventsListComponent },
    { path: 'events/:id', component: EventDetailsComponent },
    { path: '', redirectTo: '/', pathMatch: 'full' },
    // { path: '', component: HeroComponent }
    { path: '', component: LandingPageComponent }
];

