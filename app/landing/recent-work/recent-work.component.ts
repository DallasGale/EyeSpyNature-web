import { Component } from '@angular/core';
import { RecentWorkService } from '../../services/recent-work.service';
import { DomSanitizer } from '@angular/platform-browser';


@Component({
    selector: '<recent-work></recent-work>',
    templateUrl: '/app/landing/recent-work/recent-work.component.html'
})

export class RecentWorkComponent {
    pageTitle: string;

    constructor(private recentWorkService: RecentWorkService) {
        this.pageTitle = 'Recent Work';

           
    }
}
