import { Component, Input, Output, EventEmitter } from '@angular/core'

@Component ({
    selector: 'gallery-cta',
    template: `
            <div class="well">
                <button class="btn btn-default" (click)="handleClickMe()">{{ category?.name }}</button>
            </div>
    `
})

export class GalleryCtaComponent {
    @Input() category:any
}