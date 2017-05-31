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
let HeroComponent = class HeroComponent {
    constructor(heroService, globalService) {
        this.heroService = heroService;
        this.globalService = globalService;
    }
    ngOnInit() {
        this.heros = this.heroService.getHeros();
        this.branding = this.globalService;
    }
};
HeroComponent = __decorate([
    core_1.Component({
        selector: '<hero></hero>',
        templateUrl: 'app/landing/hero/hero.component.html',
        styles: [`
        .logo, .landing__layout--cta {
            animation: animationFrames linear 2s;
            animation-iteration-count: 1;
            transform-origin: 50% 50%;
            animation-fill-mode:forwards;
        }
    `]
    }),
    __metadata("design:paramtypes", [hero_service_1.HeroService, global_settings_service_1.GlobalService])
], HeroComponent);
exports.HeroComponent = HeroComponent;
//# sourceMappingURL=hero.component.js.map