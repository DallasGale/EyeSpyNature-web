import { Component } from '@angular/core'
import { HashLocationStrategy, Location, LocationStrategy } from '@angular/common'


@Component({
    selector: 'eyespy-app',
    providers: [Location, {provide: LocationStrategy, useClass: HashLocationStrategy}],
    template: `
    <header id="header" class="header">
        <nav-bar></nav-bar>
    </header>
    <router-outlet></router-outlet>
    `
})
export class EyeSpyNatureAppComponent  {


   
}
