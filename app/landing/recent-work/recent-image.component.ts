import { Component, OnInit } from '@angular/core'
import { RecentWorkService } from '../../services/recent-work.service'


@Component({
   selector: 'recent-image',
   templateUrl: 'app/landing/recent-work/recent-image.component.html',
 })

export class RecentImageComponent implements OnInit {
    openModalWindow:boolean=false;
    imagePointer:number;
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