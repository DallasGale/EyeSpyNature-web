import { Component } from '@angular/core'
import { GalleryCategoriesService } from '../../services/gallery-categories.service'
import { ActivatedRoute } from '@angular/router'

@Component({
    selector: '',
    template: `
    <div class="container-fluid gallery-container">
        <div class="row">
            <div class="col-xs-12">
                <h1>{{ category?.name }}</h1>
                <div class="row">
                    <masonry [options]="{ transitionDuration: '0.5s' }">
                        <masonry-brick *ngFor="let image of category.images" class="grid-item">
                            <img [src]="'app/media/watermarked/' + image?.ref">
                        </masonry-brick>
                    </masonry>
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