import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
// import { MasonryModule } from 'angular2-masonry';

// Main app
import { EyeSpyNatureAppComponent } from './eyespynature-app.component';
// Landing
import { LandingPageComponent } from './landing/landing.component';
// Hero
import { HeroComponent } from './landing/hero/hero.component';
import { HeroImgComponent } from './landing/hero/hero-img.component';
import { HeroService } from './services/hero.service';
// Recent Work
import { RecentWorkComponent } from './landing/recent-work/recent-work.component';
import { RecentWorkService } from './services/recent-work.service';
import { RecentImageComponent } from './landing/recent-work/recent-image.component';
// Print Info
import { PrintInfoComponent } from './print-info/print-info.component';
// Global Settings
import { GlobalService } from './services/global-settings.service';
//Events
import { EventsListComponent } from './events/events-list.component';
import { EventThumbnailComponent } from './events/event-thumbnail.component';
import { EventService } from './services/event.service';
import { EventDetailsComponent } from './events/event-details/event-details.component';
//Navigation
import { NavBarComponent } from './nav/navbar.component';
import { NavigationService } from './services/nav.service';

import { ToastrService } from './common/toastr.service';
import { appRoutes } from './routes';


@NgModule({
    imports: [
        BrowserModule,
        RouterModule.forRoot(appRoutes),
        FormsModule,
        // MasonryModule
    ],
    declarations: [
        EyeSpyNatureAppComponent,
        LandingPageComponent,
        HeroComponent,
        RecentWorkComponent,
        RecentImageComponent,
        PrintInfoComponent,
        HeroImgComponent,
        EventsListComponent,
        EventThumbnailComponent,
        NavBarComponent,
        EventDetailsComponent
        ],
    providers: [
        GlobalService, 
        NavigationService, 
        EventService,
        HeroService, 
        RecentWorkService, 
        ToastrService],
    bootstrap: [EyeSpyNatureAppComponent]
})
export class AppModule {

}