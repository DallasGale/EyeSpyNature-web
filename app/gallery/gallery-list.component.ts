import { Component, OnInit } from '@angular/core'
import { GalleryCategoriesService } from '../services/gallery-categories.service'


@Component ({
    selector: 'gallery-list',
    template: `
        <div class="row">
            <div class="col-md-3" *ngFor="let item of categories">
                <gallery-cta (eventClick)="handleEventClicked($event)" [category]="item"></gallery-cta>
            </div>
        </div>
    `
})

export class GalleryListComponent implements OnInit {
    categories:any[]

    constructor(private galleryCategoriesService: GalleryCategoriesService) {
    
    }

    ngOnInit() {
        this.categories = this.galleryCategoriesService.getCategories()
    }
}