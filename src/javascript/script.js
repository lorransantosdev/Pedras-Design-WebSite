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

function toggleAnswer(element) {
    const answer = element.nextElementSibling;
    const icon = element.querySelector('i');
    
    if (answer.style.display === "block") {
      answer.style.display = "none";
      icon.classList.remove('fa-minus');
      icon.classList.add('fa-plus');
    } else {
      answer.style.display = "block";
      icon.classList.remove('fa-plus');
      icon.classList.add('fa-minus');
    }
  }



