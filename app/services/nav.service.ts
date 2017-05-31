import { Injectable } from '@angular/core';

@Injectable()
export class NavigationService {

    // Menu
    getNavs() { 
        return NAVIGATION 
    }
    getNav(id:number) { 
        return NAVIGATION.find(nav => nav.id === id) 
    }
     // Social Media
    getSocials() { 
        return SOCIALS 
    }
    getSocial(id:number) { 
        return SOCIALS.find(social => social.id === id) 
    }
}

const NAVIGATION = [
    {
        id: 1,
        title: 'home',
        link: '/'
    },
    {
        id: 2,
        title: 'about',
        link: '/about'
    },
    {
        id: 3,
        title: 'browse gallery',
        categories: [
            {
                id: 1,
                title: 'flowers',
                link: 'flowers'
            },
            {
                id: 2,
                title: 'leaves',
                link: 'leaves'
            },
            {
                id: 3,
                title: 'insects',
                link: 'insects'
            },
            {
                id: 4,
                title: 'fungai',
                link: 'fungai'
            }
        ]
    },
    {
        id: 3,
        title: 'contact',
        link: '/contact'
    },
    {
        id: 4,
        title: 'shop digital stock',
        link: '/shop/digital'
    },
    {
        id: 5,
        title: 'shop limited prints',
        link: '/shop/prints'
    }
] 
const SOCIALS = [
    {
        id: 1,
        title: 'facebook',
        url: 'http://www.facebook.com',
        class: 'facebook'
    },
    {
        id: 2,
        title: 'twitter',
        url: 'http://www.facebook.com',
        class: 'twitter'
    },
    {
        id: 3,
        title: 'instagram',
        url: 'http://www.facebook.com',
        class: 'instagram'
    }
] 