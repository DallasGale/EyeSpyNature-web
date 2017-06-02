import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GalleryCategoriesService } from '../services/gallery-categories.service';
import { ActivatedRoute } from '@angular/router';



@Component({
    selector: 'gallery',
    template: `
        <div class="container">
            <div class="row">
                <div class="col-xs-12">
                    <h1>{{pageTitle}}</h1>
                    <gallery-list></gallery-list>
                </div>
            </div>
        </div>
    `
})

export class GalleryComponent implements OnInit {
    pageTitle: string
    categories:any

    constructor (private galleryCategoriesService: GalleryCategoriesService, private route:ActivatedRoute) {
        this.pageTitle = 'Gallery';
    }

    ngOnInit() {
        this.categories = this.route.snapshot.data['categories']
    }   
}