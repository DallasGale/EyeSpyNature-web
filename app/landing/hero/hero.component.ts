import { Component, OnInit } from '@angular/core';
import { HeroService } from '../../services/hero.service';
import { GlobalService } from '../../services/global-settings.service';
import { DomSanitizer } from '@angular/platform-browser';


@Component({
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
})
export class HeroComponent implements OnInit {
    heros:any[]
    branding:any

    constructor(private heroService: HeroService, private globalService: GlobalService) {}

    ngOnInit() {
        this.heros = this.heroService.getHeros()
        this.branding = this.globalService
    }
}