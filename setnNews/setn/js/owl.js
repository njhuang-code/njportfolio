$('.flash-content').owlCarousel({
    loop: true,
    margin: 10,
    responsiveClass: true,
    dots: false,
    responsive: {
        0: {
            items: 1,
            nav: true
        },
        1000: {
            items: 1,
            nav: true,
            loop: false
        }
    }
});
$('.focus-news-content').owlCarousel({
    loop: true,
    margin: 10,
    responsiveClass: true,
    dots: true,
    nav: true,
    responsive: {
        0: {
            items: 1,
        },
        1000: {
            items: 1,
            loop: true
        }
    }
});
$('.slide-video-content').owlCarousel({
    loop: true,
    margin: 10,
    responsiveClass: true,
    dots: true,
    nav: false,
    responsive: {
        0: {
            items: 1,
        },
        768: {
            items: 3,
            nav: false,
            loop: false
        },
        1200: {
            items: 1,
            nav: false,
            loop: false
        }
    }
});
$('.stock-container').owlCarousel({
    loop: true,
    margin: 10,
    responsiveClass: true,
    dots: false,
    nav: true,
    responsive: {
        0: {
            items: 1,
        },
        768: {
            items: 3,
            nav: true
        },
        1280: {
            items: 1,
            loop: false,
            nav: true
        }
    }
});
$('.photo-news-content').owlCarousel({
    loop: true,
    margin: 10,
    responsiveClass: true,
    dots: false,
    nav: true,
    responsive: {
        0: {
            items: 1,
        },
        600: {
            items: 1,
            nav: true
        },
        1000: {
            items: 1,
            nav: true,
        }
    }
});
$('.program-items').owlCarousel({
    loop: true,
    margin: 10,
    responsiveClass: true,
    dots: false,
    nav: true,
    center: true,
    responsive: {
        0: {
            items: 1,
        },
        768: {
            items: 3,
        },
        1200: {
            items: 3,
            nav: true
        }
    }
});
$('.type-news-slide-content').owlCarousel({
    loop: true,
    margin: 10,
    dots: true,
    autoplay: false,
    autoplayHoverPause: true,
    responsiveClass: true,
    nav: false,
    center: true,
    responsive: {
        0: {
            items: 1,
        },
        768: {
            items: 3,
        },
        1200: {
            items: 3,
            dots: true,
        }
    }
});
$('.charts-area').owlCarousel({
    loop: false,
    margin: 10,
    dots: false,
    autoplayHoverPause: true,
    responsiveClass: true,
    nav: false,
    responsive: {
        0: {
            items: 2,
        },
        768: {
            items: 3,

        },
        1200: {
            items: 3,
            nav: true,
        }
    }
});