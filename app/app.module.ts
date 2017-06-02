import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { MasonryModule } from 'angular2-masonry';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Error404Component } from './errors/404.component'

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
import { PrintInfoComponent } from './landing/print-info/print-info.component';

// Global Settings
import { GlobalService } from './services/global-settings.service';

// Gallery
import { GalleryComponent } from './gallery/gallery.component';
import { GalleryCategoriesComponent } from './gallery/gallery-categories/gallery-categories.component';
import { GalleryCategoriesService } from './services/gallery-categories.service';
import { GalleryCategoriesActivator } from './gallery/gallery-categories/gallery-categories-activator.service';
import { GalleryListComponent } from './gallery/gallery-list.component',
import { GalleryCtaComponent } from './gallery/gallery-cta.component'

//Navigation
import { NavBarComponent } from './nav/navbar.component';
import { NavBarDefaultComponent } from './nav/navbar-default.component';
import { NavigationService } from './services/nav.service';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { ToastrService } from './common/toastr.service';
import { appRoutes } from './routes';

//ThirdParty
import { BsDropdownModule } from 'ngx-bootstrap';

import 'hammerjs';
import 'mousetrap';
import { ModalGalleryModule } from 'angular-modal-gallery';


@NgModule({
    imports: [
        BrowserModule,
        RouterModule.forRoot(appRoutes),
        FormsModule,
        MasonryModule,
        BsDropdownModule.forRoot(),
        ModalGalleryModule,
        BrowserAnimationsModule
    ],
    declarations: [
        EyeSpyNatureAppComponent,
        LandingPageComponent,
        HeroComponent,
        RecentWorkComponent,
        RecentImageComponent,
        PrintInfoComponent,
        HeroImgComponent,
        NavBarComponent,
        NavBarDefaultComponent,
        AboutComponent,
        ContactComponent,
        GalleryComponent,
        GalleryCategoriesComponent,
        GalleryListComponent,
        GalleryCtaComponent
        ],
    providers: [
        GlobalService, 
        NavigationService, 
        HeroService, 
        RecentWorkService, 
        ToastrService,
        GalleryCategoriesService,
        GalleryCategoriesActivator],
    bootstrap: [EyeSpyNatureAppComponent]
})
export class AppModule {

}