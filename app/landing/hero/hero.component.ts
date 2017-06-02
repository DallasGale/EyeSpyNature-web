import { 
    Component, 
    OnInit, 
    trigger,
    state,
    style,
    transition,
    animate,
    keyframes
 } from '@angular/core';

import { HeroService } from '../../services/hero.service';
import { GlobalService } from '../../services/global-settings.service';
// import { DomSanitizer } from '@angular/platform-browser';


@Component({
    selector: '<hero></hero>',
    templateUrl: 'app/landing/hero/hero.component.html',
    styles: [],
    animations: [
        trigger('focusPanel', [
            state('inactive', style({
                transform: 'scale(1)',
                background: '#ffffff',
                color: 'black'
            })),
            state('active', style({
                transform: 'scale(1.5)',
                background: '#000000',
                color: 'white'
            })),
            transition('inactive => active', animate('300ms ease-in')),
            transition('active => inactive', animate('300ms ease-out'))
        ])
    ],

})
export class HeroComponent implements OnInit {

    heros:any[]
    branding:any

    constructor(private heroService: HeroService, private globalService: GlobalService) {}

    ngOnInit() {
        this.heros = this.heroService.getHeros()
        this.branding = this.globalService
    }

    state: string = 'inactive';
    toggleMove() {
        this.state = (this.state === 'inactive' ? 'active' : 'inactive')
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

        console.log('clicked')      
    }
}