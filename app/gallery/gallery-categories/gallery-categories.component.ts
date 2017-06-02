import { Component } from '@angular/core'
import { GalleryCategoriesService } from '../../services/gallery-categories.service'
import { ActivatedRoute } from '@angular/router'

@Component({
    selector: '',
    template: `
    <div class="container gallery-container">
        <div class="row">
            <div class="col-xs-12">
                <h1>{{ category?.name }}</h1>
                <div class="row">
                    <div class="col-md-4">
                        <img [src]="category?.images.ref" [alt]="category?.name">
                    </div>
                </div>
            </div>
        </div>
    </div>
    `
})

export class GalleryCategoriesComponent {
    category:any

    constructor(private galleryCategoriesService: GalleryCategoriesService, private route:ActivatedRoute) {

    }
    ngOnInit() {
        this.category = this.galleryCategoriesService.getCategory(
            this.route.snapshot.params['id'])
    }

}