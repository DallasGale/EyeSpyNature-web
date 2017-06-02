"use strict";
const router_1 = require("@angular/router");
const landing_component_1 = require("./landing/landing.component");
const about_component_1 = require("./about/about.component");
const contact_component_1 = require("./contact/contact.component");
const gallery_component_1 = require("./gallery/gallery.component");
const gallery_categories_component_1 = require("./gallery/gallery-categories/gallery-categories.component");
exports.appRoutes = [
    {
        path: '',
        redirectTo: '/',
        pathMatch: 'full'
    },
    {
        path: '',
        component: landing_component_1.LandingPageComponent
    },
    {
        path: 'about',
        component: about_component_1.AboutComponent
    },
    {
        path: 'contact',
        component: contact_component_1.ContactComponent
    },
    {
        path: 'gallery',
        component: gallery_component_1.GalleryComponent
    },
    {
        path: 'gallery/:id', component: gallery_categories_component_1.GalleryCategoriesComponent
    }
];
exports.routes = router_1.RouterModule.forRoot(exports.appRoutes);
//# sourceMappingURL=routes.js.map