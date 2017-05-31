"use strict";
var landing_component_1 = require("./landing/landing.component");
var events_list_component_1 = require("./events/events-list.component");
var event_details_component_1 = require("./events/event-details/event-details.component");
exports.appRoutes = [
    { path: 'events', component: events_list_component_1.EventsListComponent },
    { path: 'events/:id', component: event_details_component_1.EventDetailsComponent },
    { path: '', redirectTo: '/', pathMatch: 'full' },
    { path: '', component: landing_component_1.LandingPageComponent }
];
//# sourceMappingURL=routes.js.map