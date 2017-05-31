﻿import { Component } from '@angular/core'
import { EventService } from '../../services/event.service'
import { ActivatedRoute } from '@angular/router'

@Component({
    templateUrl:
    '/app/events/event-details/event-details.component.html',
    styles: [`
        .container { padding: 20px;}
        .event-image { height: 100px;}
    `]
})
export class EventDetailsComponent {
    event:any

    constructor(private eventService:EventService, private route: ActivatedRoute) {

    }
    ngOnInit() {
        this.event = this.eventService.getEvent(1)
    }
 }