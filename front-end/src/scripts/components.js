// HEADER
// $(document).ready(function () {
//    $('.header').scrollToFixed();
// });


// SMOOTH SCROLL 
// $('a[href*="#"]:not([href="#"])').click(function () {
//     if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
//         var target = $(this.hash);
//         target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
//         if (target.length) {
//             $('html, body').animate({
//                 scrollTop: target.offset().top
//             }, 800, 'easeInOutExpo');
//             return false;
//         }
//     }
// });




// GALLERY 
// $(".section__recentwork--img-container:odd").addClass("even");
// $(".section__recentwork--img-container:even").addClass("odd");

// $(function () {
//     $('.lazy').lazy({
//         effect: "fadeIn",
//         effectTime: 2000,
//         threshold: 200
//     });
// });




// LIGHTBOX

// $(document).ready(function () {
//     $('.popup').magnificPopup({ type: 'image' });
// });




// MASONRY GRID

// var $grid = $('.grid').masonry({
//     itemSelector: '.grid-item',
//     percentPosition: true,
//     horizontalOrder: true,
//     columnWidth: '.grid-sizer',
//     gutter: 10
// });

// $grid.imagesLoaded().progress(function () {
//     $grid.masonry('layout');
// });






// HEADER SCROLLING
var didScroll;
var lastScrollTop = 0;
var delta = 160;
var navbarHeight = $('header').outerHeight();

$(window).scroll(function (event) {
    didScroll = true;
});

setInterval(function () {
    if (didScroll) {
        hasScrolled();
        didScroll = false;
    }
}, 500);

function hasScrolled() {
    var st = $(this).scrollTop();
    if (Math.abs(lastScrollTop - st) <= delta)
        return;

    if (st > lastScrollTop && st > navbarHeight) {
        $('html').removeClass('nav-down').addClass('nav-up');
    } else {
        $('html').addClass('nav-down').removeClass('nav-up');
    }
    lastScrollTop = st;
}

// FIXED HEADER
$(window).scroll(function () {

    var scroll = $(window).scrollTop();

    if (scroll >= 160) {
        $("html").removeClass("reached-top");
    } else {
        $("html").addClass("reached-top");
    }

});
