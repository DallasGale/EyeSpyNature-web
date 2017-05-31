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
let RecentWorkComponent = class RecentWorkComponent {
    constructor(recentWorkService) {
        this.recentWorkService = recentWorkService;
        this.pageTitle = 'Recent Work';
    }
};
RecentWorkComponent = __decorate([
    core_1.Component({
        selector: '<recent-work></recent-work>',
        templateUrl: '/app/landing/recent-work/recent-work.component.html'
    }),
    __metadata("design:paramtypes", [recent_work_service_1.RecentWorkService])
], RecentWorkComponent);
exports.RecentWorkComponent = RecentWorkComponent;
//# sourceMappingURL=recent-work.component.js.map