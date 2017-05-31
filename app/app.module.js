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
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var router_1 = require("@angular/router");
var forms_1 = require("@angular/forms");
var angular2_masonry_1 = require("angular2-masonry");
// Main app
var eyespynature_app_component_1 = require("./eyespynature-app.component");
// Landing
var landing_component_1 = require("./landing/landing.component");
// Hero
var hero_component_1 = require("./landing/hero/hero.component");
var hero_img_component_1 = require("./landing/hero/hero-img.component");
var hero_service_1 = require("./services/hero.service");
// Recent Work
var recent_work_component_1 = require("./landing/recent-work/recent-work.component");
var recent_work_service_1 = require("./services/recent-work.service");
var recent_image_component_1 = require("./landing/recent-work/recent-image.component");
// Print Info
var print_info_component_1 = require("./print-info/print-info.component");
// Global Settings
var global_settings_service_1 = require("./services/global-settings.service");
//Events
var events_list_component_1 = require("./events/events-list.component");
var event_thumbnail_component_1 = require("./events/event-thumbnail.component");
var event_service_1 = require("./services/event.service");
var event_details_component_1 = require("./events/event-details/event-details.component");
//Navigation
var navbar_component_1 = require("./nav/navbar.component");
var nav_service_1 = require("./services/nav.service");
var toastr_service_1 = require("./common/toastr.service");
var routes_1 = require("./routes");
// import { JQ_TOKEN, PopupTriggerDirective } from './common/index'
// declare let jQuery : Object;
// import './Scripts/customDependencies';
// import './Scripts/customScripts';
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [
            platform_browser_1.BrowserModule,
            router_1.RouterModule.forRoot(routes_1.appRoutes),
            forms_1.FormsModule,
            angular2_masonry_1.MasonryModule
        ],
        declarations: [
            eyespynature_app_component_1.EyeSpyNatureAppComponent,
            landing_component_1.LandingPageComponent,
            hero_component_1.HeroComponent,
            recent_work_component_1.RecentWorkComponent,
            recent_image_component_1.RecentImageComponent,
            print_info_component_1.PrintInfoComponent,
            hero_img_component_1.HeroImgComponent,
            events_list_component_1.EventsListComponent,
            event_thumbnail_component_1.EventThumbnailComponent,
            navbar_component_1.NavBarComponent,
            event_details_component_1.EventDetailsComponent
        ],
        providers: [
            global_settings_service_1.GlobalService,
            nav_service_1.NavigationService,
            event_service_1.EventService,
            hero_service_1.HeroService,
            recent_work_service_1.RecentWorkService,
            toastr_service_1.ToastrService
        ],
        bootstrap: [eyespynature_app_component_1.EyeSpyNatureAppComponent]
    }),
    __metadata("design:paramtypes", [])
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map