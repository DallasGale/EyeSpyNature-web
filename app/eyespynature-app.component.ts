import { Component } from '@angular/core'
import { HashLocationStrategy, Location, LocationStrategy } from '@angular/common'


@Component({
    selector: 'eyespy-app',
    providers: [Location, {provide: LocationStrategy, useClass: HashLocationStrategy}],
    template: `
    <nav-bar></nav-bar>
    <router-outlet></router-outlet>
    `
})
export class EyeSpyNatureAppComponent  {


   
}

