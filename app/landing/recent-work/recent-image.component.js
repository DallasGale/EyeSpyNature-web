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
const recent_work_service_1 = require("../../services/recent-work.service");
let RecentImageComponent = class RecentImageComponent {
    constructor(recentWokrService) {
        this.recentWokrService = recentWokrService;
    }
    ngOnInit() {
        this.images = this.recentWokrService.getImages();
    }
    toggleAllImages() {
        if (this.showAllImages == true) {
            this.showAllImages = false;
        }
        else {
            this.showAllImages = true;
        }
    }
};
RecentImageComponent = __decorate([
    core_1.Component({
        selector: 'recent-image',
        template: `
        <div class="row">
            <div class="col-xs-12">
                <button class="button main-cta" (click)="toggleAllImages()">
                    {{ showAllImages ? "Show Less" : "Show More"}}
                </button>
            </div>
        </div>
       
     `
    }),
    __metadata("design:paramtypes", [recent_work_service_1.RecentWorkService])
], RecentImageComponent);
exports.RecentImageComponent = RecentImageComponent;
//# sourceMappingURL=recent-image.component.js.map