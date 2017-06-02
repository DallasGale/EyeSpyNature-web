import { Component, OnInit } from '@angular/core'
import { ActivatedRoute } from '@angular/router';
import { GalleryCategoriesService } from '../services/gallery-categories.service'
import { Router }  from '@angular/router';


@Component ({
    selector: 'gallery-list',
    template: `
        <div class="row">
            <div class="col-md-3 col-sm-3" *ngFor="let item of categories">
                <gallery-cta [routerLink]="['/gallery', {outlets: {'list': ['gallerylist'], 'cat': ['none']}}]" [category]="item" (click)="showCat(item.id)"></gallery-cta>            
            </div>
        </div>
    `
})

export class GalleryListComponent implements OnInit {
    categories:any[]

    constructor(
        private galleryCategoriesService: GalleryCategoriesService, 
        private router: Router,
        private route: ActivatedRoute) {
}

    showCat(id) {
        this.router.navigate(['/gallery', {outlets: {'cat': [id]}}]);
    }

    ngOnInit() {
          this.route.params.subscribe((params: {id: string}) => {
            this.categories = this.galleryCategoriesService.getCategories()
          })
    }
}


