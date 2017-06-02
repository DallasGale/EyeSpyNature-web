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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJjb21wb25lbnRzLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEhFQURFUlxyXG4vLyAkKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbiAoKSB7XHJcbi8vICAgICQoJy5oZWFkZXInKS5zY3JvbGxUb0ZpeGVkKCk7XHJcbi8vIH0pO1xyXG5cclxuXHJcbi8vIFNNT09USCBTQ1JPTEwgXHJcbi8vICQoJ2FbaHJlZio9XCIjXCJdOm5vdChbaHJlZj1cIiNcIl0pJykuY2xpY2soZnVuY3Rpb24gKCkge1xyXG4vLyAgICAgaWYgKGxvY2F0aW9uLnBhdGhuYW1lLnJlcGxhY2UoL15cXC8vLCAnJykgPT0gdGhpcy5wYXRobmFtZS5yZXBsYWNlKC9eXFwvLywgJycpICYmIGxvY2F0aW9uLmhvc3RuYW1lID09IHRoaXMuaG9zdG5hbWUpIHtcclxuLy8gICAgICAgICB2YXIgdGFyZ2V0ID0gJCh0aGlzLmhhc2gpO1xyXG4vLyAgICAgICAgIHRhcmdldCA9IHRhcmdldC5sZW5ndGggPyB0YXJnZXQgOiAkKCdbbmFtZT0nICsgdGhpcy5oYXNoLnNsaWNlKDEpICsgJ10nKTtcclxuLy8gICAgICAgICBpZiAodGFyZ2V0Lmxlbmd0aCkge1xyXG4vLyAgICAgICAgICAgICAkKCdodG1sLCBib2R5JykuYW5pbWF0ZSh7XHJcbi8vICAgICAgICAgICAgICAgICBzY3JvbGxUb3A6IHRhcmdldC5vZmZzZXQoKS50b3BcclxuLy8gICAgICAgICAgICAgfSwgODAwLCAnZWFzZUluT3V0RXhwbycpO1xyXG4vLyAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbi8vICAgICAgICAgfVxyXG4vLyAgICAgfVxyXG4vLyB9KTtcclxuXHJcblxyXG5cclxuXHJcbi8vIEdBTExFUlkgXHJcbi8vICQoXCIuc2VjdGlvbl9fcmVjZW50d29yay0taW1nLWNvbnRhaW5lcjpvZGRcIikuYWRkQ2xhc3MoXCJldmVuXCIpO1xyXG4vLyAkKFwiLnNlY3Rpb25fX3JlY2VudHdvcmstLWltZy1jb250YWluZXI6ZXZlblwiKS5hZGRDbGFzcyhcIm9kZFwiKTtcclxuXHJcbi8vICQoZnVuY3Rpb24gKCkge1xyXG4vLyAgICAgJCgnLmxhenknKS5sYXp5KHtcclxuLy8gICAgICAgICBlZmZlY3Q6IFwiZmFkZUluXCIsXHJcbi8vICAgICAgICAgZWZmZWN0VGltZTogMjAwMCxcclxuLy8gICAgICAgICB0aHJlc2hvbGQ6IDIwMFxyXG4vLyAgICAgfSk7XHJcbi8vIH0pO1xyXG5cclxuXHJcblxyXG5cclxuLy8gTElHSFRCT1hcclxuXHJcbi8vICQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uICgpIHtcclxuLy8gICAgICQoJy5wb3B1cCcpLm1hZ25pZmljUG9wdXAoeyB0eXBlOiAnaW1hZ2UnIH0pO1xyXG4vLyB9KTtcclxuXHJcblxyXG5cclxuXHJcbi8vIE1BU09OUlkgR1JJRFxyXG5cclxuLy8gdmFyICRncmlkID0gJCgnLmdyaWQnKS5tYXNvbnJ5KHtcclxuLy8gICAgIGl0ZW1TZWxlY3RvcjogJy5ncmlkLWl0ZW0nLFxyXG4vLyAgICAgcGVyY2VudFBvc2l0aW9uOiB0cnVlLFxyXG4vLyAgICAgaG9yaXpvbnRhbE9yZGVyOiB0cnVlLFxyXG4vLyAgICAgY29sdW1uV2lkdGg6ICcuZ3JpZC1zaXplcicsXHJcbi8vICAgICBndXR0ZXI6IDEwXHJcbi8vIH0pO1xyXG5cclxuLy8gJGdyaWQuaW1hZ2VzTG9hZGVkKCkucHJvZ3Jlc3MoZnVuY3Rpb24gKCkge1xyXG4vLyAgICAgJGdyaWQubWFzb25yeSgnbGF5b3V0Jyk7XHJcbi8vIH0pO1xyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG4vLyBIRUFERVIgU0NST0xMSU5HXHJcbnZhciBkaWRTY3JvbGw7XHJcbnZhciBsYXN0U2Nyb2xsVG9wID0gMDtcclxudmFyIGRlbHRhID0gMTYwO1xyXG52YXIgbmF2YmFySGVpZ2h0ID0gJCgnaGVhZGVyJykub3V0ZXJIZWlnaHQoKTtcclxuXHJcbiQod2luZG93KS5zY3JvbGwoZnVuY3Rpb24gKGV2ZW50KSB7XHJcbiAgICBkaWRTY3JvbGwgPSB0cnVlO1xyXG59KTtcclxuXHJcbnNldEludGVydmFsKGZ1bmN0aW9uICgpIHtcclxuICAgIGlmIChkaWRTY3JvbGwpIHtcclxuICAgICAgICBoYXNTY3JvbGxlZCgpO1xyXG4gICAgICAgIGRpZFNjcm9sbCA9IGZhbHNlO1xyXG4gICAgfVxyXG59LCA1MDApO1xyXG5cclxuZnVuY3Rpb24gaGFzU2Nyb2xsZWQoKSB7XHJcbiAgICB2YXIgc3QgPSAkKHRoaXMpLnNjcm9sbFRvcCgpO1xyXG4gICAgaWYgKE1hdGguYWJzKGxhc3RTY3JvbGxUb3AgLSBzdCkgPD0gZGVsdGEpXHJcbiAgICAgICAgcmV0dXJuO1xyXG5cclxuICAgIGlmIChzdCA+IGxhc3RTY3JvbGxUb3AgJiYgc3QgPiBuYXZiYXJIZWlnaHQpIHtcclxuICAgICAgICAkKCdodG1sJykucmVtb3ZlQ2xhc3MoJ25hdi1kb3duJykuYWRkQ2xhc3MoJ25hdi11cCcpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICAkKCdodG1sJykuYWRkQ2xhc3MoJ25hdi1kb3duJykucmVtb3ZlQ2xhc3MoJ25hdi11cCcpO1xyXG4gICAgfVxyXG4gICAgbGFzdFNjcm9sbFRvcCA9IHN0O1xyXG59XHJcblxyXG4vLyBGSVhFRCBIRUFERVJcclxuJCh3aW5kb3cpLnNjcm9sbChmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgdmFyIHNjcm9sbCA9ICQod2luZG93KS5zY3JvbGxUb3AoKTtcclxuXHJcbiAgICBpZiAoc2Nyb2xsID49IDE2MCkge1xyXG4gICAgICAgICQoXCJodG1sXCIpLnJlbW92ZUNsYXNzKFwicmVhY2hlZC10b3BcIik7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgICQoXCJodG1sXCIpLmFkZENsYXNzKFwicmVhY2hlZC10b3BcIik7XHJcbiAgICB9XHJcblxyXG59KTtcclxuIl0sImZpbGUiOiJjb21wb25lbnRzLmpzIn0=
