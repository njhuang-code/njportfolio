$('.gba-slick').owlCarousel({
    loop:false,
    margin:0,
    responsiveClass:true,
    nav: true,
    dots:true,
    dotsEach:2,
    autoplay:false,
    mouseDrag: false,
    responsive:{
        0:{
            items:3,
        },
        1000:{
            items:5,
        }
    }
})

$('.vote-result').owlCarousel({
    loop:false,
    margin:0,
    center:true,
    nav: false,
    dots:true,
    dotsEach:2,
    autoplay:false,
    items:1

});


