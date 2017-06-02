// HEADER
//$(document).ready(function () {
//    $('.header').scrollToFixed();
//});


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
// $(window).scroll(function () {

//     var scroll = $(window).scrollTop();

//     if (scroll >= 160) {
//         $("html").removeClass("reached-top");
//     } else {
//         $("html").addClass("reached-top");
//     }

// });

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJjb21wb25lbnRzLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEhFQURFUlxyXG4vLyQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uICgpIHtcclxuLy8gICAgJCgnLmhlYWRlcicpLnNjcm9sbFRvRml4ZWQoKTtcclxuLy99KTtcclxuXHJcblxyXG4vLyBTTU9PVEggU0NST0xMIFxyXG4kKCdhW2hyZWYqPVwiI1wiXTpub3QoW2hyZWY9XCIjXCJdKScpLmNsaWNrKGZ1bmN0aW9uICgpIHtcclxuICAgIGlmIChsb2NhdGlvbi5wYXRobmFtZS5yZXBsYWNlKC9eXFwvLywgJycpID09IHRoaXMucGF0aG5hbWUucmVwbGFjZSgvXlxcLy8sICcnKSAmJiBsb2NhdGlvbi5ob3N0bmFtZSA9PSB0aGlzLmhvc3RuYW1lKSB7XHJcbiAgICAgICAgdmFyIHRhcmdldCA9ICQodGhpcy5oYXNoKTtcclxuICAgICAgICB0YXJnZXQgPSB0YXJnZXQubGVuZ3RoID8gdGFyZ2V0IDogJCgnW25hbWU9JyArIHRoaXMuaGFzaC5zbGljZSgxKSArICddJyk7XHJcbiAgICAgICAgaWYgKHRhcmdldC5sZW5ndGgpIHtcclxuICAgICAgICAgICAgJCgnaHRtbCwgYm9keScpLmFuaW1hdGUoe1xyXG4gICAgICAgICAgICAgICAgc2Nyb2xsVG9wOiB0YXJnZXQub2Zmc2V0KCkudG9wXHJcbiAgICAgICAgICAgIH0sIDgwMCwgJ2Vhc2VJbk91dEV4cG8nKTtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSk7XHJcblxyXG5cclxuXHJcblxyXG4vLyBHQUxMRVJZIFxyXG4kKFwiLnNlY3Rpb25fX3JlY2VudHdvcmstLWltZy1jb250YWluZXI6b2RkXCIpLmFkZENsYXNzKFwiZXZlblwiKTtcclxuJChcIi5zZWN0aW9uX19yZWNlbnR3b3JrLS1pbWctY29udGFpbmVyOmV2ZW5cIikuYWRkQ2xhc3MoXCJvZGRcIik7XHJcblxyXG4kKGZ1bmN0aW9uICgpIHtcclxuICAgICQoJy5sYXp5JykubGF6eSh7XHJcbiAgICAgICAgZWZmZWN0OiBcImZhZGVJblwiLFxyXG4gICAgICAgIGVmZmVjdFRpbWU6IDIwMDAsXHJcbiAgICAgICAgdGhyZXNob2xkOiAyMDBcclxuICAgIH0pO1xyXG59KTtcclxuXHJcblxyXG5cclxuXHJcbi8vIExJR0hUQk9YXHJcblxyXG4kKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbiAoKSB7XHJcbiAgICAkKCcucG9wdXAnKS5tYWduaWZpY1BvcHVwKHsgdHlwZTogJ2ltYWdlJyB9KTtcclxufSk7XHJcblxyXG5cclxuXHJcblxyXG4vLyBNQVNPTlJZIEdSSURcclxuXHJcbnZhciAkZ3JpZCA9ICQoJy5ncmlkJykubWFzb25yeSh7XHJcbiAgICBpdGVtU2VsZWN0b3I6ICcuZ3JpZC1pdGVtJyxcclxuICAgIHBlcmNlbnRQb3NpdGlvbjogdHJ1ZSxcclxuICAgIGhvcml6b250YWxPcmRlcjogdHJ1ZSxcclxuICAgIGNvbHVtbldpZHRoOiAnLmdyaWQtc2l6ZXInLFxyXG4gICAgZ3V0dGVyOiAxMFxyXG59KTtcclxuXHJcbiRncmlkLmltYWdlc0xvYWRlZCgpLnByb2dyZXNzKGZ1bmN0aW9uICgpIHtcclxuICAgICRncmlkLm1hc29ucnkoJ2xheW91dCcpO1xyXG59KTtcclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuLy8gSEVBREVSIFNDUk9MTElOR1xyXG52YXIgZGlkU2Nyb2xsO1xyXG52YXIgbGFzdFNjcm9sbFRvcCA9IDA7XHJcbnZhciBkZWx0YSA9IDE2MDtcclxudmFyIG5hdmJhckhlaWdodCA9ICQoJ2hlYWRlcicpLm91dGVySGVpZ2h0KCk7XHJcblxyXG4kKHdpbmRvdykuc2Nyb2xsKGZ1bmN0aW9uIChldmVudCkge1xyXG4gICAgZGlkU2Nyb2xsID0gdHJ1ZTtcclxufSk7XHJcblxyXG5zZXRJbnRlcnZhbChmdW5jdGlvbiAoKSB7XHJcbiAgICBpZiAoZGlkU2Nyb2xsKSB7XHJcbiAgICAgICAgaGFzU2Nyb2xsZWQoKTtcclxuICAgICAgICBkaWRTY3JvbGwgPSBmYWxzZTtcclxuICAgIH1cclxufSwgNTAwKTtcclxuXHJcbmZ1bmN0aW9uIGhhc1Njcm9sbGVkKCkge1xyXG4gICAgdmFyIHN0ID0gJCh0aGlzKS5zY3JvbGxUb3AoKTtcclxuICAgIGlmIChNYXRoLmFicyhsYXN0U2Nyb2xsVG9wIC0gc3QpIDw9IGRlbHRhKVxyXG4gICAgICAgIHJldHVybjtcclxuXHJcbiAgICBpZiAoc3QgPiBsYXN0U2Nyb2xsVG9wICYmIHN0ID4gbmF2YmFySGVpZ2h0KSB7XHJcbiAgICAgICAgJCgnaHRtbCcpLnJlbW92ZUNsYXNzKCduYXYtZG93bicpLmFkZENsYXNzKCduYXYtdXAnKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgJCgnaHRtbCcpLmFkZENsYXNzKCduYXYtZG93bicpLnJlbW92ZUNsYXNzKCduYXYtdXAnKTtcclxuICAgIH1cclxuICAgIGxhc3RTY3JvbGxUb3AgPSBzdDtcclxufVxyXG5cclxuLy8gRklYRUQgSEVBREVSXHJcbiQod2luZG93KS5zY3JvbGwoZnVuY3Rpb24gKCkge1xyXG5cclxuICAgIHZhciBzY3JvbGwgPSAkKHdpbmRvdykuc2Nyb2xsVG9wKCk7XHJcblxyXG4gICAgaWYgKHNjcm9sbCA+PSAxNjApIHtcclxuICAgICAgICAkKFwiaHRtbFwiKS5yZW1vdmVDbGFzcyhcInJlYWNoZWQtdG9wXCIpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICAkKFwiaHRtbFwiKS5hZGRDbGFzcyhcInJlYWNoZWQtdG9wXCIpO1xyXG4gICAgfVxyXG5cclxufSk7XHJcbiJdLCJmaWxlIjoiY29tcG9uZW50cy5qcyJ9
