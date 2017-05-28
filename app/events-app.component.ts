import { Component } from '@angular/core'
import {HashLocationStrategy, Location, LocationStrategy} from '@angular/common';

@Component({
    selector: 'events-app',
    providers: [Location, {provide: LocationStrategy, useClass: HashLocationStrategy}],
    template: `
    <nav-bar></nav-bar>
    <router-outlet></router-outlet>
    `
})
export class EventsAppComponent {

}

export class HashLocationComponent {
  location: Location;
  constructor(location: Location) { this.location = location; }
}