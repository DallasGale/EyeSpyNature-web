import { Component, Input, Output, EventEmitter } from '@angular/core'

@Component ({
    selector: 'gallery-cta',
    template: `
                <button class="btn btn-default category-cta">{{ category?.name }}</button>
    `
})

export class GalleryCtaComponent {
    @Input() category:any
}