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
let HeroService = class HeroService {
    getHeros() {
        return HEROS;
    }
    getHero(id) {
        return HEROS.find(hero => hero.id === id);
    }
};
HeroService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [])
], HeroService);
exports.HeroService = HeroService;
const HEROS = [
    {
        id: 1,
        url: 'app/media/hero/esn-lve-000002-web1800x1200.jpg',
        name: "test"
    },
    {
        id: 2,
        url: 'app/media/hero/esn-lve-000006-web1800x1200.jpg',
        name: "test"
    },
    {
        id: 3,
        url: 'app/media/hero/esn-flw-000006-web1800x1200.jpg',
        name: "test"
    },
    {
        id: 4,
        url: 'app/media/hero/esn-flw-000014-web1800x1200.jpg',
        name: "test"
    },
    {
        id: 5,
        url: 'app/media/hero/esn-ins-000001-web1800x1200.jpg',
        name: "test"
    },
    {
        id: 6,
        url: 'app/media/hero/esn-flw-000013-web1200x1800.jpg',
        name: "test"
    },
    {
        id: 7,
        url: 'app/media/hero/esn-flw-000024-web1800x1200.jpg',
        name: "test"
    },
    {
        id: 8,
        url: 'app/media/hero/esn-lve-000005-v2-web1800x1200.jpg',
        name: "test"
    },
    {
        id: 9,
        url: 'app/media/hero/esn-fng-000004-web1800x1200.jpg',
        name: "test"
    },
    {
        id: 10,
        url: 'app/media/hero/esn-fng-000006-web1800x1200.jpg',
        name: "test"
    },
    {
        id: 11,
        url: 'app/media/hero/esn-flw-000003-web1800x1200.jpg',
        name: "test"
    }
];
//# sourceMappingURL=hero.service.js.map