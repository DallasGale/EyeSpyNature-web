import { Injectable } from '@angular/core'

@Injectable()
export class HeroService {
    getHeros() { 
        return HEROS 
    }
    getHero(id:number) { 
        return HEROS.find(hero => hero.id === id)
    }
}

const HEROS = [
    {
        id: 1,
        url: 'app/media/hero/esn-lve-000002-web1800x1200.jpg',
        name: "test"
    },
    {
        id: 2,
        url: 'app/media/hero/esn-lve-000006-web1800x1200.jpg',
        name: "test"
    },
    {
        id: 3,
        url: 'app/media/hero/esn-flw-000006-web1800x1200.jpg',
        name: "test"
    },
    {
        id: 4,
        url: 'app/media/hero/esn-flw-000014-web1800x1200.jpg',
        name: "test"
    },
    {
        id: 5,
        url: 'app/media/hero/esn-ins-000001-web1800x1200.jpg',
        name: "test"
    },
    {
        id: 6,
        url: 'app/media/hero/esn-flw-000013-web1200x1800.jpg',
        name: "test"
    },
    {
        id: 7,
        url: 'app/media/hero/esn-flw-000024-web1800x1200.jpg',
        name: "test"
    },
    {
        id: 8,
        url: 'app/media/hero/esn-lve-000005-v2-web1800x1200.jpg',
        name: "test"
    },
    {
        id: 9,
        url: 'app/media/hero/esn-fng-000004-web1800x1200.jpg',
        name: "test"
    },
    {
        id: 10,
        url: 'app/media/hero/esn-fng-000006-web1800x1200.jpg',
        name: "test"
    },
    {
        id: 11,
        url: 'app/media/hero/esn-flw-000003-web1800x1200.jpg',
        name: "test"
    }
]