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
    // GALLERY CATEGORIES
    getCats() { 
        return GALLERY 
    }
    getCat(id:any) { 
        return GALLERY.find(cat => cat.id === id) 
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
        title: 'about',
        link: '/about'
    },
    {
        id: 2,
        title: 'contact',
        link: '/contact'
    },
    {
        id: 3,
        title: 'shop digital stock',
        link: '/shop/digital'
    },
    {
        id: 4,
        title: 'shop limited prints',
        link: '/shop/prints'
    }
] 

const GALLERY = [
     {
        id: 'flowers',
        title: 'flowers',
        link: 'flowers'
    },
    {
        id: 'leaves',
        title: 'leaves',
        link: 'leaves'
    },
    {
        id: 'insects',
        title: 'insects',
        link: 'insects'
    },
    {
        id: 'fungai',
        title: 'fungai',
        link: 'fungai'
    },
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