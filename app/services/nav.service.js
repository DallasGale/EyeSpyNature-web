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
let NavigationService = class NavigationService {
    // Menu
    getNavs() {
        return NAVIGATION;
    }
    getNav(id) {
        return NAVIGATION.find(nav => nav.id === id);
    }
    // Social Media
    getSocials() {
        return SOCIALS;
    }
    getSocial(id) {
        return SOCIALS.find(social => social.id === id);
    }
};
NavigationService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [])
], NavigationService);
exports.NavigationService = NavigationService;
const NAVIGATION = [
    {
        id: 1,
        title: 'home',
        link: '/'
    },
    {
        id: 2,
        title: 'about',
        link: '/about'
    },
    {
        id: 3,
        title: 'browse gallery',
        categories: [
            {
                id: 1,
                title: 'flowers',
                link: 'flowers'
            },
            {
                id: 2,
                title: 'leaves',
                link: 'leaves'
            },
            {
                id: 3,
                title: 'insects',
                link: 'insects'
            },
            {
                id: 4,
                title: 'fungai',
                link: 'fungai'
            }
        ]
    },
    {
        id: 3,
        title: 'contact',
        link: '/contact'
    },
    {
        id: 4,
        title: 'shop digital stock',
        link: '/shop/digital'
    },
    {
        id: 5,
        title: 'shop limited prints',
        link: '/shop/prints'
    }
];
const SOCIALS = [
    {
        id: 1,
        title: 'facebook',
        url: 'http://www.facebook.com',
        class: 'facebook'
    },
    {
        id: 2,
        title: 'twitter',
        url: 'http://www.facebook.com',
        class: 'twitter'
    },
    {
        id: 3,
        title: 'instagram',
        url: 'http://www.facebook.com',
        class: 'instagram'
    }
];
//# sourceMappingURL=nav.service.js.map