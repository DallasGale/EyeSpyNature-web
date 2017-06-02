"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
const core_1 = require("@angular/core");
const platform_browser_1 = require("@angular/platform-browser");
const router_1 = require("@angular/router");
const forms_1 = require("@angular/forms");
const angular2_masonry_1 = require("angular2-masonry");
const animations_1 = require("@angular/platform-browser/animations");
// Main app
const eyespynature_app_component_1 = require("./eyespynature-app.component");
// Landing
const landing_component_1 = require("./landing/landing.component");
// Hero
const hero_component_1 = require("./landing/hero/hero.component");
const hero_img_component_1 = require("./landing/hero/hero-img.component");
const hero_service_1 = require("./services/hero.service");
// Recent Work
const recent_work_component_1 = require("./landing/recent-work/recent-work.component");
const recent_work_service_1 = require("./services/recent-work.service");
const recent_image_component_1 = require("./landing/recent-work/recent-image.component");
// Print Info
const print_info_component_1 = require("./landing/print-info/print-info.component");
// Global Settings
const global_settings_service_1 = require("./services/global-settings.service");
// Gallery
const gallery_component_1 = require("./gallery/gallery.component");
const gallery_categories_component_1 = require("./gallery/gallery-categories/gallery-categories.component");
const gallery_categories_service_1 = require("./services/gallery-categories.service");
const gallery_categories_activator_service_1 = require("./gallery/gallery-categories/gallery-categories-activator.service");
const gallery_list_component_1 = require("./gallery/gallery-list.component");
const gallery_cta_component_1 = require("./gallery/gallery-cta.component");
//Navigation
const navbar_component_1 = require("./nav/navbar.component");
const navbar_default_component_1 = require("./nav/navbar-default.component");
const nav_service_1 = require("./services/nav.service");
const about_component_1 = require("./about/about.component");
const contact_component_1 = require("./contact/contact.component");
const toastr_service_1 = require("./common/toastr.service");
const routes_1 = require("./routes");
//ThirdParty
const ngx_bootstrap_1 = require("ngx-bootstrap");
require("hammerjs");
require("mousetrap");
const angular_modal_gallery_1 = require("angular-modal-gallery");
let AppModule = class AppModule {
};
AppModule = __decorate([
    core_1.NgModule({
        imports: [
            platform_browser_1.BrowserModule,
            router_1.RouterModule.forRoot(routes_1.appRoutes),
            forms_1.FormsModule,
            angular2_masonry_1.MasonryModule,
            ngx_bootstrap_1.BsDropdownModule.forRoot(),
            angular_modal_gallery_1.ModalGalleryModule,
            animations_1.BrowserAnimationsModule
        ],
        declarations: [
            eyespynature_app_component_1.EyeSpyNatureAppComponent,
            landing_component_1.LandingPageComponent,
            hero_component_1.HeroComponent,
            recent_work_component_1.RecentWorkComponent,
            recent_image_component_1.RecentImageComponent,
            print_info_component_1.PrintInfoComponent,
            hero_img_component_1.HeroImgComponent,
            navbar_component_1.NavBarComponent,
            navbar_default_component_1.NavBarDefaultComponent,
            about_component_1.AboutComponent,
            contact_component_1.ContactComponent,
            gallery_component_1.GalleryComponent,
            gallery_categories_component_1.GalleryCategoriesComponent,
            gallery_list_component_1.GalleryListComponent,
            gallery_cta_component_1.GalleryCtaComponent
        ],
        providers: [
            global_settings_service_1.GlobalService,
            nav_service_1.NavigationService,
            hero_service_1.HeroService,
            recent_work_service_1.RecentWorkService,
            toastr_service_1.ToastrService,
            gallery_categories_service_1.GalleryCategoriesService,
            gallery_categories_activator_service_1.GalleryCategoriesActivator
        ],
        bootstrap: [eyespynature_app_component_1.EyeSpyNatureAppComponent]
    }),
    __metadata("design:paramtypes", [])
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map