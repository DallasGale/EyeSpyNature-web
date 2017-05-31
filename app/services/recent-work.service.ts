import { Injectable } from '@angular/core'

@Injectable()
export class RecentWorkService {
    getImages() {
        return IMAGES
    }
    getImage(id:number) {
        return IMAGES.find(image => image.id === id)
    }
}


const IMAGES = [
    {
        id: 1,
        ref: 'leaves/ESN-LVE-0000001.jpg',
        orientation: 'portrait',
        title: 'ESN-LVE-0000001'
    },
    {
        id: 2,
        ref: 'insects/ESN-INS-0000001.jpg',
        orientation: '',
        title: 'ESN-INS-0000001'
    },
    {
        id: 3,
        ref: 'leaves/ESN-LVE-0000002.jpg',
        orientation: '',
        title: 'ESN-LVE-0000002'
    },
    {
        id: 4,
        ref: 'flowers/ESN-FLW-0000002.jpg',
        orientation: '',
        title: 'ESN-FLW-0000002'
    },
    {
        id: 5,
        ref: 'flowers/ESN-FLW-0000003.jpg',
        orientation: '',
        title: 'ESN-FLW-0000003'
    },
    {
        id: 6,
        ref: 'flowers/ESN-FLW-0000004.jpg',
        orientation: '',
        title: 'ESN-FLW-0000004'
    },
    {
        id: 7,
        ref: 'flowers/ESN-FLW-0000005.jpg',
        orientation: '',
        title: 'ESN-FLW-0000005'
    },
    {
        id: 8,
        ref: 'flowers/ESN-FLW-0000006.jpg',
        orientation: '',
        title: 'ESN-FLW-0000006'
    },
    {
        id: 9,
        ref: 'flowers/ESN-FLW-0000010.jpg',
        orientation: '',
        title: 'ESN-FLW-0000010'
    },
    {
        id: 10,
        ref: 'flowers/ESN-FLW-0000011.jpg',
        orientation: '',
        title: 'ESN-FLW-0000011'
    },
    {
        id: 11,
        ref: 'flowers/ESN-FLW-0000014.jpg',
        orientation: '',
        title: 'ESN-FLW-0000014'
    },
    {
        id: 12,
        ref: 'flowers/ESN-FLW-0000016.jpg',
        orientation: '',
        title: 'ESN-FLW-0000016'
    },
    {
        id: 13,
        ref: 'flowers/ESN-FLW-0000017.jpg',
        orientation: '',
        title: 'ESN-FLW-0000017'
    },
    {
        id: 14,
        ref: 'flowers/ESN-FLW-0000021.jpg',
        orientation: '',
        title: 'ESN-FLW-0000021'
    },
    {
        id: 15,
        ref: 'flowers/ESN-FLW-0000023.jpg',
        orientation: '',
        title: 'ESN-FLW-0000023'
    },
    {
        id: 16,
        ref: 'flowers/ESN-FLW-0000024.jpg',
        orientation: '',
        title: 'ESN-FLW-0000024'
    },
    {
        id: 17,
        ref: 'flowers/ESN-FLW-0000013.jpg',
        orientation: '',
        title: 'ESN-FLW-0000013'
    },
    {
        id: 18,
        ref: 'leaves/ESN-LVE-0000009.jpg',
        orientation: '',
        title: 'ESN-LVE-0000009'
    },
    {
        id: 19,
        ref: 'leaves/ESN-LVE-0000007.jpg',
        orientation: '',
        title: 'ESN-LVE-0000007'
    },
    {
        id: 20,
        ref: 'fungai/ESN-FNG-0000004.jpg',
        orientation: '',
        title: 'ESN-LVE-0000007'
    },
    {
        id: 21,
        ref: 'fungai/ESN-FNG-0000006.jpg',
        orientation: '',
        title: 'ESN-FNG-0000006'
    },
    {
        id: 22,
        ref: 'fungai/ESN-FNG-0000005.jpg',
        orientation: '',
        title: 'ESN-FNG-0000005'
    },
    {
        id: 23,
        ref: 'fungai/ESN-FNG-0000008.jpg',
        orientation: '',
        title: 'ESN-FNG-0000008'
    }
]
