/// <reference path="../jquery.d.ts"/>
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
    }
    else {
        $('html').addClass('nav-down').removeClass('nav-up');
    }
    lastScrollTop = st;
}
//# sourceMappingURL=smoothScroll.js.map