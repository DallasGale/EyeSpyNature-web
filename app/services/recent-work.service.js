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
let RecentWorkService = class RecentWorkService {
    getImages() {
        return IMAGES;
    }
    getImage(id) {
        return IMAGES.find(image => image.id === id);
    }
};
RecentWorkService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [])
], RecentWorkService);
exports.RecentWorkService = RecentWorkService;
const IMAGES = [
    {
        id: 1,
        ref: 'leaves/ESN-LVE-0000001.jpg',
        orientation: 'portrait',
        title: 'ESN-LVE-0000001'
    },
    {
        id: 2,
        ref: 'insects/ESN-INS-0000001.jpg',
        orientation: '',
        title: 'ESN-INS-0000001'
    },
    {
        id: 3,
        ref: 'leaves/ESN-LVE-0000002.jpg',
        orientation: '',
        title: 'ESN-LVE-0000002'
    },
    {
        id: 4,
        ref: 'flowers/ESN-FLW-0000002.jpg',
        orientation: '',
        title: 'ESN-FLW-0000002'
    },
    {
        id: 5,
        ref: 'flowers/ESN-FLW-0000003.jpg',
        orientation: '',
        title: 'ESN-FLW-0000003'
    },
    {
        id: 6,
        ref: 'flowers/ESN-FLW-0000004.jpg',
        orientation: '',
        title: 'ESN-FLW-0000004'
    },
    {
        id: 7,
        ref: 'flowers/ESN-FLW-0000005.jpg',
        orientation: '',
        title: 'ESN-FLW-0000005'
    },
    {
        id: 8,
        ref: 'flowers/ESN-FLW-0000006.jpg',
        orientation: '',
        title: 'ESN-FLW-0000006'
    },
    {
        id: 9,
        ref: 'flowers/ESN-FLW-0000010.jpg',
        orientation: '',
        title: 'ESN-FLW-0000010'
    },
    {
        id: 10,
        ref: 'flowers/ESN-FLW-0000011.jpg',
        orientation: '',
        title: 'ESN-FLW-0000011'
    },
    {
        id: 11,
        ref: 'flowers/ESN-FLW-0000014.jpg',
        orientation: '',
        title: 'ESN-FLW-0000014'
    },
    {
        id: 12,
        ref: 'flowers/ESN-FLW-0000016.jpg',
        orientation: '',
        title: 'ESN-FLW-0000016'
    },
    {
        id: 13,
        ref: 'flowers/ESN-FLW-0000017.jpg',
        orientation: '',
        title: 'ESN-FLW-0000017'
    },
    {
        id: 14,
        ref: 'flowers/ESN-FLW-0000021.jpg',
        orientation: '',
        title: 'ESN-FLW-0000021'
    },
    {
        id: 15,
        ref: 'flowers/ESN-FLW-0000023.jpg',
        orientation: '',
        title: 'ESN-FLW-0000023'
    },
    {
        id: 16,
        ref: 'flowers/ESN-FLW-0000024.jpg',
        orientation: '',
        title: 'ESN-FLW-0000024'
    },
    {
        id: 17,
        ref: 'flowers/ESN-FLW-0000013.jpg',
        orientation: '',
        title: 'ESN-FLW-0000013'
    },
    {
        id: 18,
        ref: 'leaves/ESN-LVE-0000009.jpg',
        orientation: '',
        title: 'ESN-LVE-0000009'
    },
    {
        id: 19,
        ref: 'leaves/ESN-LVE-0000007.jpg',
        orientation: '',
        title: 'ESN-LVE-0000007'
    },
    {
        id: 20,
        ref: 'fungai/ESN-FNG-0000004.jpg',
        orientation: '',
        title: 'ESN-LVE-0000007'
    },
    {
        id: 21,
        ref: 'fungai/ESN-FNG-0000006.jpg',
        orientation: '',
        title: 'ESN-FNG-0000006'
    },
    {
        id: 22,
        ref: 'fungai/ESN-FNG-0000005.jpg',
        orientation: '',
        title: 'ESN-FNG-0000005'
    },
    {
        id: 23,
        ref: 'fungai/ESN-FNG-0000008.jpg',
        orientation: '',
        title: 'ESN-FNG-0000008'
    }
];
//# sourceMappingURL=recent-work.service.js.map