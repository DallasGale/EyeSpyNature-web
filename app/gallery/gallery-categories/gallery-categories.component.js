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
const gallery_categories_service_1 = require("../../services/gallery-categories.service");
const router_1 = require("@angular/router");
let GalleryCategoriesComponent = class GalleryCategoriesComponent {
    constructor(galleryCategoriesService, route) {
        this.galleryCategoriesService = galleryCategoriesService;
        this.route = route;
    }
    ngOnInit() {
        this.category = this.galleryCategoriesService.getCategory(this.route.snapshot.params['id']);
    }
};
GalleryCategoriesComponent = __decorate([
    core_1.Component({
        selector: '',
        template: `
    <div class="container-fluid gallery-container">
        <div class="row">
            <div class="col-xs-12">
                <h1>{{ category?.name }}</h1>
                <div class="row">
                    <masonry [options]="{ transitionDuration: '0.5s' }">
                        <masonry-brick *ngFor="let image of category.images" class="grid-item">
                            <img [src]="'app/media/watermarked/' + image?.ref">
                        </masonry-brick>
                    </masonry>
                </div>
            </div>
        </div>
    </div>
    `
    }),
    __metadata("design:paramtypes", [gallery_categories_service_1.GalleryCategoriesService, router_1.ActivatedRoute])
], GalleryCategoriesComponent);
exports.GalleryCategoriesComponent = GalleryCategoriesComponent;
//# sourceMappingURL=gallery-categories.component.js.map