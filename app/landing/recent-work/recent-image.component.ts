import { Component, OnInit } from '@angular/core'
import { RecentWorkService } from '../../services/recent-work.service'


@Component({
   selector: 'recent-image',
   template: `
        <div class="row">
            <div class="col-xs-12">
                <button class="button main-cta" (click)="toggleAllImages()">
                    {{ showAllImages ? "Show Less" : "Show More"}}
                </button>
            </div>
        </div>
       
     `
 })

export class RecentImageComponent implements OnInit {
    images:any[]
    showAllImages: boolean;

    constructor(private recentWokrService: RecentWorkService) {
        
    }
    
    ngOnInit() {
        this.images = this.recentWokrService.getImages()
    }
    toggleAllImages(){
        if(this.showAllImages == true) {
            this.showAllImages = false;
        } else {
            this.showAllImages = true;
        }
    }
 }