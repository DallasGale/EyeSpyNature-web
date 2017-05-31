// HEADER
//$(document).ready(function () {
//    $('.header').scrollToFixed();
//});


// SMOOTH SCROLL 
$('a[href*="#"]:not([href="#"])').click(function () {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        if (target.length) {
            $('html, body').animate({
                scrollTop: target.offset().top
            }, 800, 'easeInOutExpo');
            return false;
        }
    }
});




// TWEENS
TweenMax.to(".logo", 10, {
    opacity: 1,
    left: 0,
    delay: 1,
    ease: Expo.easeOut
});

TweenMax.to(".landing__layout--cta", 10, {
    opacity: 1,
    left: 0,
    delay: 1.5,
    ease: Expo.easeOut
});



// GALLERY 
$(".section__recentwork--img-container:odd").addClass("even");
$(".section__recentwork--img-container:even").addClass("odd");

$(function () {
    $('.lazy').lazy({
        effect: "fadeIn",
        effectTime: 2000,
        threshold: 200
    });
});




// LIGHTBOX

$(document).ready(function () {
    $('.popup').magnificPopup({ type: 'image' });
});




// MASONRY GRID

var $grid = $('.grid').masonry({
    itemSelector: '.grid-item',
    percentPosition: true,
    horizontalOrder: true,
    columnWidth: '.grid-sizer',
    gutter: 10
});

$grid.imagesLoaded().progress(function () {
    $grid.masonry('layout');
});






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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJjb21wb25lbnRzLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEhFQURFUlxyXG4vLyQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uICgpIHtcclxuLy8gICAgJCgnLmhlYWRlcicpLnNjcm9sbFRvRml4ZWQoKTtcclxuLy99KTtcclxuXHJcblxyXG4vLyBTTU9PVEggU0NST0xMIFxyXG4kKCdhW2hyZWYqPVwiI1wiXTpub3QoW2hyZWY9XCIjXCJdKScpLmNsaWNrKGZ1bmN0aW9uICgpIHtcclxuICAgIGlmIChsb2NhdGlvbi5wYXRobmFtZS5yZXBsYWNlKC9eXFwvLywgJycpID09IHRoaXMucGF0aG5hbWUucmVwbGFjZSgvXlxcLy8sICcnKSAmJiBsb2NhdGlvbi5ob3N0bmFtZSA9PSB0aGlzLmhvc3RuYW1lKSB7XHJcbiAgICAgICAgdmFyIHRhcmdldCA9ICQodGhpcy5oYXNoKTtcclxuICAgICAgICB0YXJnZXQgPSB0YXJnZXQubGVuZ3RoID8gdGFyZ2V0IDogJCgnW25hbWU9JyArIHRoaXMuaGFzaC5zbGljZSgxKSArICddJyk7XHJcbiAgICAgICAgaWYgKHRhcmdldC5sZW5ndGgpIHtcclxuICAgICAgICAgICAgJCgnaHRtbCwgYm9keScpLmFuaW1hdGUoe1xyXG4gICAgICAgICAgICAgICAgc2Nyb2xsVG9wOiB0YXJnZXQub2Zmc2V0KCkudG9wXHJcbiAgICAgICAgICAgIH0sIDgwMCwgJ2Vhc2VJbk91dEV4cG8nKTtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSk7XHJcblxyXG5cclxuXHJcblxyXG4vLyBUV0VFTlNcclxuVHdlZW5NYXgudG8oXCIubG9nb1wiLCAxMCwge1xyXG4gICAgb3BhY2l0eTogMSxcclxuICAgIGxlZnQ6IDAsXHJcbiAgICBkZWxheTogMSxcclxuICAgIGVhc2U6IEV4cG8uZWFzZU91dFxyXG59KTtcclxuXHJcblR3ZWVuTWF4LnRvKFwiLmxhbmRpbmdfX2xheW91dC0tY3RhXCIsIDEwLCB7XHJcbiAgICBvcGFjaXR5OiAxLFxyXG4gICAgbGVmdDogMCxcclxuICAgIGRlbGF5OiAxLjUsXHJcbiAgICBlYXNlOiBFeHBvLmVhc2VPdXRcclxufSk7XHJcblxyXG5cclxuXHJcbi8vIEdBTExFUlkgXHJcbiQoXCIuc2VjdGlvbl9fcmVjZW50d29yay0taW1nLWNvbnRhaW5lcjpvZGRcIikuYWRkQ2xhc3MoXCJldmVuXCIpO1xyXG4kKFwiLnNlY3Rpb25fX3JlY2VudHdvcmstLWltZy1jb250YWluZXI6ZXZlblwiKS5hZGRDbGFzcyhcIm9kZFwiKTtcclxuXHJcbiQoZnVuY3Rpb24gKCkge1xyXG4gICAgJCgnLmxhenknKS5sYXp5KHtcclxuICAgICAgICBlZmZlY3Q6IFwiZmFkZUluXCIsXHJcbiAgICAgICAgZWZmZWN0VGltZTogMjAwMCxcclxuICAgICAgICB0aHJlc2hvbGQ6IDIwMFxyXG4gICAgfSk7XHJcbn0pO1xyXG5cclxuXHJcblxyXG5cclxuLy8gTElHSFRCT1hcclxuXHJcbiQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uICgpIHtcclxuICAgICQoJy5wb3B1cCcpLm1hZ25pZmljUG9wdXAoeyB0eXBlOiAnaW1hZ2UnIH0pO1xyXG59KTtcclxuXHJcblxyXG5cclxuXHJcbi8vIE1BU09OUlkgR1JJRFxyXG5cclxudmFyICRncmlkID0gJCgnLmdyaWQnKS5tYXNvbnJ5KHtcclxuICAgIGl0ZW1TZWxlY3RvcjogJy5ncmlkLWl0ZW0nLFxyXG4gICAgcGVyY2VudFBvc2l0aW9uOiB0cnVlLFxyXG4gICAgaG9yaXpvbnRhbE9yZGVyOiB0cnVlLFxyXG4gICAgY29sdW1uV2lkdGg6ICcuZ3JpZC1zaXplcicsXHJcbiAgICBndXR0ZXI6IDEwXHJcbn0pO1xyXG5cclxuJGdyaWQuaW1hZ2VzTG9hZGVkKCkucHJvZ3Jlc3MoZnVuY3Rpb24gKCkge1xyXG4gICAgJGdyaWQubWFzb25yeSgnbGF5b3V0Jyk7XHJcbn0pO1xyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG4vLyBIRUFERVIgU0NST0xMSU5HXHJcbnZhciBkaWRTY3JvbGw7XHJcbnZhciBsYXN0U2Nyb2xsVG9wID0gMDtcclxudmFyIGRlbHRhID0gMTYwO1xyXG52YXIgbmF2YmFySGVpZ2h0ID0gJCgnaGVhZGVyJykub3V0ZXJIZWlnaHQoKTtcclxuXHJcbiQod2luZG93KS5zY3JvbGwoZnVuY3Rpb24gKGV2ZW50KSB7XHJcbiAgICBkaWRTY3JvbGwgPSB0cnVlO1xyXG59KTtcclxuXHJcbnNldEludGVydmFsKGZ1bmN0aW9uICgpIHtcclxuICAgIGlmIChkaWRTY3JvbGwpIHtcclxuICAgICAgICBoYXNTY3JvbGxlZCgpO1xyXG4gICAgICAgIGRpZFNjcm9sbCA9IGZhbHNlO1xyXG4gICAgfVxyXG59LCA1MDApO1xyXG5cclxuZnVuY3Rpb24gaGFzU2Nyb2xsZWQoKSB7XHJcbiAgICB2YXIgc3QgPSAkKHRoaXMpLnNjcm9sbFRvcCgpO1xyXG4gICAgaWYgKE1hdGguYWJzKGxhc3RTY3JvbGxUb3AgLSBzdCkgPD0gZGVsdGEpXHJcbiAgICAgICAgcmV0dXJuO1xyXG5cclxuICAgIGlmIChzdCA+IGxhc3RTY3JvbGxUb3AgJiYgc3QgPiBuYXZiYXJIZWlnaHQpIHtcclxuICAgICAgICAkKCdodG1sJykucmVtb3ZlQ2xhc3MoJ25hdi1kb3duJykuYWRkQ2xhc3MoJ25hdi11cCcpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICAkKCdodG1sJykuYWRkQ2xhc3MoJ25hdi1kb3duJykucmVtb3ZlQ2xhc3MoJ25hdi11cCcpO1xyXG4gICAgfVxyXG4gICAgbGFzdFNjcm9sbFRvcCA9IHN0O1xyXG59XHJcblxyXG4vLyBGSVhFRCBIRUFERVJcclxuJCh3aW5kb3cpLnNjcm9sbChmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgdmFyIHNjcm9sbCA9ICQod2luZG93KS5zY3JvbGxUb3AoKTtcclxuXHJcbiAgICBpZiAoc2Nyb2xsID49IDE2MCkge1xyXG4gICAgICAgICQoXCJodG1sXCIpLnJlbW92ZUNsYXNzKFwicmVhY2hlZC10b3BcIik7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgICQoXCJodG1sXCIpLmFkZENsYXNzKFwicmVhY2hlZC10b3BcIik7XHJcbiAgICB9XHJcblxyXG59KTtcclxuIl0sImZpbGUiOiJjb21wb25lbnRzLmpzIn0=
