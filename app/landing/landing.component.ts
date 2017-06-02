import { Component, OnInit } from '@angular/core'
import { GlobalService } from '../services/global-settings.service'


@Component({
    template: `
        <hero class="hero"></hero>
        <recent-work></recent-work>
        <print-info></print-info>
    `
})
export class LandingPageComponent implements OnInit {
    branding

    constructor(private globalService: GlobalService) {
    }
    ngOnInit() {
        this.branding = this.globalService
        
    }
}
