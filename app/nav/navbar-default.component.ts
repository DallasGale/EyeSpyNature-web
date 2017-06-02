import { 
    Component, 
    OnInit,
    trigger,
    state,
    style,
    transition,
    animate,
    keyframes } from '@angular/core';  

import { GlobalService } from '../services/global-settings.service';
import { NavigationService } from '../services/nav.service';
import '../Scripts/custom/headerShowHide';


@Component({
    selector: 'nav-bar-default',
    templateUrl: 'app/nav/navbar-default.component.html',
    styles: []
})
export class NavBarDefaultComponent {
    nav:any[]
    cat:any[]
    branding: any
    social:any[]

    constructor(private globalService: GlobalService, private navigationService: NavigationService ) {

    }
     ngOnInit() {
        this.branding = this.globalService
        this.nav = this.navigationService.getNavs()
        this.cat = this.navigationService.getCats()
        this.social = this.navigationService.getSocials()
    }

}