import { Component, OnInit } from '@angular/core'
import { ActivatedRoute } from '@angular/router';
import { GalleryCategoriesService } from '../services/gallery-categories.service'
import { Router }  from '@angular/router';


@Component ({
    selector: 'gallery-list',
    template: `
        <div class="row">
            <div class="col-md-3 col-sm-3" *ngFor="let item of categories">
                <gallery-cta [routerLink]="item.id" [category]="item" class="gallery-cta"></gallery-cta>            
            </div>
        </div>
    `,
    styles: [`
        .gallery-cta {
            font-size: 30px;
            color: white;
            background-color: #faa61d;
            padding-top: 0;
            padding-bottom: 0;
            display: block;
            margin-bottom: 20px;

        }
    `]
})

export class GalleryListComponent implements OnInit {
    categories:any[]

    constructor(
        private galleryCategoriesService: GalleryCategoriesService, 
        private router: Router,
        private route: ActivatedRoute) {
}

    showBio(id) {
    this.router.navigate(['/gallery', {outlets: {'bio': [id]}}]);
  }

    ngOnInit() {
          this.route.params.subscribe((params: {id: string}) => {
            this.categories = this.galleryCategoriesService.getCategories()
          })
    }
}


