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
const gallery_categories_service_1 = require("../services/gallery-categories.service");
const router_1 = require("@angular/router");
let GalleryComponent = class GalleryComponent {
    constructor(galleryCategoriesService, route) {
        this.galleryCategoriesService = galleryCategoriesService;
        this.route = route;
        this.pageTitle = 'Gallery';
    }
    ngOnInit() {
        this.categories = this.route.snapshot.data['categories'];
    }
};
GalleryComponent = __decorate([
    core_1.Component({
        selector: 'gallery',
        template: `
        <div class="container gallery-container">
            <div class="row">
                <div class="col-md-12">
                    <h1>{{pageTitle}}</h1>
                </div>
            </div>
            <div class="row">
                <div class="col-md-12">
                    <router-outlet name="list"></router-outlet>
                    <gallery-list></gallery-list>
                </div>
            </div>
            <div class="row">
                <div class="col-md-12">
                    <router-outlet name="cat"></router-outlet>
                </div>
            </div>
        </div>
    `
    }),
    __metadata("design:paramtypes", [gallery_categories_service_1.GalleryCategoriesService, router_1.ActivatedRoute])
], GalleryComponent);
exports.GalleryComponent = GalleryComponent;
//# sourceMappingURL=gallery.component.js.map