import { Component, OnInit } from '@angular/core'
import { GlobalService } from '../services/global-settings.service'
import { NavigationService } from '../services/nav.service'

@Component({
    selector: 'nav-bar',
    templateUrl: 'app/nav/navbar.component.html',
    styles: []
})
export class NavBarComponent {
    nav:any[]
    branding: any
    social:any[]

    constructor(private globalService: GlobalService, private navigationService: NavigationService ) {

    }
     ngOnInit() {
        this.branding = this.globalService
        this.nav = this.navigationService.getNavs()
        this.social = this.navigationService.getSocials()
    }

}