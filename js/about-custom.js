$(function () {
    // team slider
    $('.teamMemberSlider').owlCarousel({
        loop: true,
        margin: 30,
        dots: false,
        nav: true,
        navText: ['<i class="fa-solid fa-arrow-right-long rt_arrow"></i>', '<i class="fa-solid fa-arrow-left-long lt_arrow active"></i>'],
        autoplay: true,
        autoplayTimeout: 3000,
        smartSpeed: 500,
        rtl:true,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
            },
            600: {
                items: 2,
            },
            1000: {
                items: 4,
                autoplay: false,
            },
            1200: {
                items: 4,
            }
        }
    });
});