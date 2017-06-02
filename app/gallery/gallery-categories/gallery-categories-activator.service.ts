import { Router, ActivatedRouteSnapshot, CanActivate } from "@angular/router"
import { Injectable } from "@angular/core"
import { GalleryCategoriesService } from '../../services/gallery-categories.service'

@Injectable()
export class GalleryCategoriesActivator implements CanActivate {
    constructor(private galleryCategoriesService:GalleryCategoriesService, private router:Router) {

    }
    canActivate(route:ActivatedRouteSnapshot) {
        const categoryExists =  !!this.galleryCategoriesService.getCategory(route.params['id'])

        if (!categoryExists)
            this.router.navigate(['/404'])
            return categoryExists
    }
}