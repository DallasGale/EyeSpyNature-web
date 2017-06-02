import { Injectable } from '@angular/core'
import { Subject } from 'rxjs/RX'

@Injectable()

export class GalleryCategoriesService {
    // eg: gallery-list
    getCategories() {
        return CATEGORIES
    }

    // eg: gallery-categories
    getCategory(id:string) {
        return CATEGORIES.find(category => category.id === id)
    }
}


const CATEGORIES = [
     {
        id: 'flowers',
        name: 'Flowers',
        images: [
            {
                id: 1,
                ref: ''
            },
            {
                id: 2,
                ref: ''
            }
        ]
    },
    {
        id: 'insects',
        name: 'Insects',
        images: [
            {
                id: 1,
                ref: ''
            },
            {
                id: 2,
                ref: ''
            }
        ]
    },
    {
        id: 'fungai',
        name: 'Fungai',
        images: [
            {
                id: 1,
                ref: ''
            },
            {
                id: 2,
                ref: ''
            }
        ]
    },
    {
        id: 'leaves',
        name: 'Leaves',
        images: [
            {
                id: 1,
                ref: ''
            },
            {
                id: 2,
                ref: ''
            }
        ]
    }
]