import { Routes, RouterModule } from '@angular/router'
import { LandingPageComponent } from './landing/landing.component'
import { ModuleWithProviders } from '@angular/core'

import { EyeSpyNatureAppComponent } from './eyespynature-app.component'
import { AboutComponent } from './about/about.component'
import { ContactComponent } from './contact/contact.component'
import { GalleryComponent } from './gallery/gallery.component'
import { GalleryListComponent } from './gallery/gallery-list.component'
import { GalleryCategoriesComponent } from './gallery/gallery-categories/gallery-categories.component'
 
export const appRoutes: Routes = [
    { 
        path: '', 
        redirectTo: '/', 
        pathMatch: 'full' 
    },
    { 
        path: '', 
        component: LandingPageComponent
    },
    { 
        path: 'about', 
        component: AboutComponent 
    },
    { 
        path: 'contact', 
        component: ContactComponent 
    },
    {
        path: 'gallery',
        component: GalleryComponent, children: [ 
        { path: 'gallerylist', component: GalleryListComponent, outlet: 'list' },
        { path: ':id', component: GalleryCategoriesComponent, outlet: 'cat' }]
    },
    // {
    //   path: 'gallery/:id', 
    //   component: GalleryCategoriesComponent  
    // }
];

export const routes: ModuleWithProviders = RouterModule.forRoot(appRoutes);
 