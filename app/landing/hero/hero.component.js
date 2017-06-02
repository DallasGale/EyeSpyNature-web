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
const hero_service_1 = require("../../services/hero.service");
const global_settings_service_1 = require("../../services/global-settings.service");
// import { DomSanitizer } from '@angular/platform-browser';
let HeroComponent = class HeroComponent {
    constructor(heroService, globalService) {
        this.heroService = heroService;
        this.globalService = globalService;
        this.state = 'inactive';
    }
    ngOnInit() {
        this.heros = this.heroService.getHeros();
        this.branding = this.globalService;
    }
    toggleMove() {
        this.state = (this.state === 'inactive' ? 'active' : 'inactive');
    }
    scroll() {
        $('a').click(function () {
            if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                if (target.length) {
                    $('html, body').animate({
                        scrollTop: target.offset().top
                    }, 800, 'easeInOutExpo');
                    return false;
                }
            }
        });
        console.log('clicked');
    }
};
HeroComponent = __decorate([
    core_1.Component({
        selector: '<hero></hero>',
        templateUrl: 'app/landing/hero/hero.component.html',
        styles: [],
        animations: [
            core_1.trigger('focusPanel', [
                core_1.state('inactive', core_1.style({
                    transform: 'scale(1)',
                    background: '#ffffff',
                    color: 'black'
                })),
                core_1.state('active', core_1.style({
                    transform: 'scale(1.5)',
                    background: '#000000',
                    color: 'white'
                })),
                core_1.transition('inactive => active', core_1.animate('300ms ease-in')),
                core_1.transition('active => inactive', core_1.animate('300ms ease-out'))
            ])
        ],
    }),
    __metadata("design:paramtypes", [hero_service_1.HeroService, global_settings_service_1.GlobalService])
], HeroComponent);
exports.HeroComponent = HeroComponent;
//# sourceMappingURL=hero.component.js.map