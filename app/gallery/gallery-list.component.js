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
const router_1 = require("@angular/router");
const gallery_categories_service_1 = require("../services/gallery-categories.service");
const router_2 = require("@angular/router");
let GalleryListComponent = class GalleryListComponent {
    constructor(galleryCategoriesService, router, route) {
        this.galleryCategoriesService = galleryCategoriesService;
        this.router = router;
        this.route = route;
    }
    showBio(id) {
        this.router.navigate(['/gallery', { outlets: { 'bio': [id] } }]);
    }
    ngOnInit() {
        this.route.params.subscribe((params) => {
            this.categories = this.galleryCategoriesService.getCategories();
        });
    }
};
GalleryListComponent = __decorate([
    core_1.Component({
        selector: 'gallery-list',
        template: `
        <div class="row">
            <div class="col-md-3 col-sm-3" *ngFor="let item of categories">
                <gallery-cta [routerLink]="item.id" [category]="item" class="gallery-cta"></gallery-cta>            
            </div>
        </div>
    `,
        styles: [`
        .gallery-cta {
            font-size: 30px;
            color: white;
            background-color: #faa61d;
            padding-top: 0;
            padding-bottom: 0;
            display: block;
            margin-bottom: 20px;

        }
    `]
    }),
    __metadata("design:paramtypes", [gallery_categories_service_1.GalleryCategoriesService,
        router_2.Router,
        router_1.ActivatedRoute])
], GalleryListComponent);
exports.GalleryListComponent = GalleryListComponent;
//# sourceMappingURL=gallery-list.component.js.map