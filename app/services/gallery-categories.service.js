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
let GalleryCategoriesService = class GalleryCategoriesService {
    // eg: gallery-list
    getCategories() {
        return CATEGORIES;
    }
    // eg: gallery-categories
    getCategory(id) {
        return CATEGORIES.find(category => category.id === id);
    }
};
GalleryCategoriesService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [])
], GalleryCategoriesService);
exports.GalleryCategoriesService = GalleryCategoriesService;
const CATEGORIES = [
    {
        id: 'flowers',
        name: 'Flowers',
        images: [
            {
                id: 1,
                ref: ''
            },
            {
                id: 2,
                ref: ''
            }
        ]
    },
    {
        id: 'insects',
        name: 'Insects',
        images: [
            {
                id: 1,
                ref: ''
            },
            {
                id: 2,
                ref: ''
            }
        ]
    },
    {
        id: 'fungai',
        name: 'Fungai',
        images: [
            {
                id: 1,
                ref: ''
            },
            {
                id: 2,
                ref: ''
            }
        ]
    },
    {
        id: 'leaves',
        name: 'Leaves',
        images: [
            {
                id: 1,
                ref: ''
            },
            {
                id: 2,
                ref: ''
            }
        ]
    }
];
//# sourceMappingURL=gallery-categories.service.js.map