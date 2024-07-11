$(document).ready(function() {
    $('#mobile_btn').on('click', function () {
        $('#mobile_menu').toggleClass('active');
        $('#mobile_btn').find('i').toggleClass('fa-x');
    });

    $(window).on('scroll', function () {
        // const header = $('header');
        // const scrollPosition = $(window).scrollTop() - header.outerHeight();
    });

    ScrollReveal().reveal('#cta', {
        origin: 'bottom',
        duration: 1500,
        distance: '15%'
    });

    ScrollReveal().reveal('#about_us .texts', {
        origin: 'left',
        duration: 1500,
        distance: '15%'
    });


});



