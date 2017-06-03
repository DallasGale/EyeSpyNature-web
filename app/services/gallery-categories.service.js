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
                ref: 'flowers/ESN-FLW-0000001.jpg'
            },
            {
                id: 2,
                ref: 'flowers/ESN-FLW-0000002.jpg'
            },
            {
                id: 3,
                ref: 'flowers/ESN-FLW-0000003.jpg'
            },
            {
                id: 4,
                ref: 'flowers/ESN-FLW-0000004.jpg'
            },
            {
                id: 5,
                ref: 'flowers/ESN-FLW-0000005.jpg'
            },
            {
                id: 6,
                ref: 'flowers/ESN-FLW-0000006.jpg'
            },
            {
                id: 7,
                ref: 'flowers/ESN-FLW-0000007.jpg'
            },
            {
                id: 8,
                ref: 'flowers/ESN-FLW-0000008.jpg'
            },
            {
                id: 9,
                ref: 'flowers/ESN-FLW-0000009.jpg'
            },
            {
                id: 10,
                ref: 'flowers/ESN-FLW-0000010.jpg'
            },
            {
                id: 11,
                ref: 'flowers/flowers/ESN-FLW-0000011.jpg'
            },
            {
                id: 12,
                ref: 'flowers/ESN-FLW-0000012.jpg'
            }
        ]
    },
    {
        id: 'insects',
        name: 'Insects',
        images: [
            {
                id: 1,
                ref: 'insects/ESN-INS-0000001.jpg'
            },
            {
                id: 2,
                ref: 'insects/ESN-INS-0000002.jpg'
            },
            {
                id: 3,
                ref: 'insects/ESN-INS-0000003.jpg'
            }
        ]
    },
    {
        id: 'fungai',
        name: 'Fungai',
        images: [
            {
                id: 1,
                ref: 'fungai/ESN-FNG-0000002.jpg'
            },
            {
                id: 2,
                ref: 'fungai/ESN-FNG-0000003.jpg'
            },
            {
                id: 3,
                ref: 'fungai/ESN-FNG-0000004.jpg'
            },
            {
                id: 4,
                ref: 'fungai/ESN-FNG-0000005.jpg'
            },
            {
                id: 5,
                ref: 'fungai/ESN-FNG-0000006.jpg'
            },
            {
                id: 6,
                ref: 'fungai/ESN-FNG-0000007.jpg'
            },
            {
                id: 7,
                ref: 'fungai/ESN-FNG-0000008.jpg'
            },
            {
                id: 8,
                ref: 'fungai/ESN-FNG-0000009.jpg'
            },
            {
                id: 9,
                ref: 'fungai/ESN-FNG-0000010.jpg'
            }
        ]
    },
    {
        id: 'leaves',
        name: 'Leaves',
        images: [
            {
                id: 1,
                ref: 'leaves/ESN-LVE-0000001.jpg'
            },
            {
                id: 2,
                ref: 'leaves/ESN-LVE-0000002.jpg'
            },
            {
                id: 3,
                ref: 'leaves/ESN-LVE-0000003.jpg'
            },
            {
                id: 4,
                ref: 'leaves/ESN-LVE-0000004.jpg'
            },
            {
                id: 5,
                ref: 'leaves/ESN-LVE-0000005.jpg'
            },
            {
                id: 6,
                ref: 'leaves/ESN-LVE-0000006.jpg'
            },
            {
                id: 7,
                ref: 'leaves/ESN-LVE-0000007.jpg'
            },
            {
                id: 8,
                ref: 'leaves/ESN-LVE-0000008.jpg'
            },
            {
                id: 9,
                ref: 'leaves/ESN-LVE-0000009.jpg'
            },
            {
                id: 10,
                ref: 'leaves/ESN-LVE-0000010.jpg'
            },
            {
                id: 11,
                ref: 'leaves/ESN-LVE-0000011-V2.jpg'
            }
        ]
    },
    {
        id: 'light',
        name: 'Light',
        images: [
            {
                id: 1,
                ref: 'light/ESN-LTE-0000001.jpg'
            }
        ]
    },
    {
        id: 'grass',
        name: 'Grass',
        images: [
            {
                id: 1,
                ref: 'grass/ESN-GRS-0000001.jpg'
            },
            {
                id: 2,
                ref: 'grass/ESN-GRS-0000002.jpg'
            }
        ]
    },
    {
        id: 'water',
        name: 'Water',
        images: [
            {
                id: 1,
                ref: 'water/ESN-WTR-0000001.jpg'
            }
        ]
    },
    {
        id: 'landscape',
        name: 'Landscape',
        images: [
            {
                id: 1,
                ref: 'landscape/ESN-LSC-0000001.jpg'
            }
        ]
    },
    {
        id: 'tree',
        name: 'Tree',
        images: [
            {
                id: 1,
                ref: 'tree/ESN-TRE-0000002.jpg'
            }
        ]
    },
    {
        id: 'abstract',
        name: 'Abstract',
        images: [
            {
                id: 1,
                ref: 'abstract/ESN-ABS-0000001.jpg'
            },
            {
                id: 2,
                ref: 'abstract/ESN-ABS-0000002-v2.jpg'
            },
            {
                id: 3,
                ref: 'tree/ESN-TRE-0000002.jpg'
            }
        ]
    }
];
//# sourceMappingURL=gallery-categories.service.js.map