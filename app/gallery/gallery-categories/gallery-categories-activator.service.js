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
const router_1 = require("@angular/router");
const core_1 = require("@angular/core");
const gallery_categories_service_1 = require("../../services/gallery-categories.service");
let GalleryCategoriesActivator = class GalleryCategoriesActivator {
    constructor(galleryCategoriesService, router) {
        this.galleryCategoriesService = galleryCategoriesService;
        this.router = router;
    }
    canActivate(route) {
        const categoryExists = !!this.galleryCategoriesService.getCategory(+route.params['id']);
        if (!categoryExists)
            this.router.navigate(['/404']);
        return categoryExists;
    }
};
GalleryCategoriesActivator = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [gallery_categories_service_1.GalleryCategoriesService, router_1.Router])
], GalleryCategoriesActivator);
exports.GalleryCategoriesActivator = GalleryCategoriesActivator;
//# sourceMappingURL=gallery-categories-activator.service.js.map