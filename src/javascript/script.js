$(document).ready(function() {
    $('#mobile_btn').on('click', function () {
        $('#mobile_menu').toggleClass('active');
        $('#mobile_btn').find('i').toggleClass('fa-x');
    });

    ScrollReveal().reveal('#cta', {
        origin: 'bottom',
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

document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const formData = new FormData(this);

    fetch(this.action, {
        method: 'POST',
        body: formData
    }).then(response => {
        if (response.ok) {
            this.reset();
            alert('Formulário enviado, em breve entraremos em contato!');
        } else {
            alert('Erro ao enviar!');
        }
    })
});


let currentSlide = 0;
let autoSlideInterval;

function showSlide(index) {
    const slides = document.querySelectorAll('.carousel-slide');
    const totalSlides = slides.length;
    const isMobile = window.innerWidth <= 800;
    const slidesToShow = isMobile ? 1 : 2;
    
    if (index >= totalSlides / slidesToShow) {
        currentSlide = 0;
    } else if (index < 0) {
        currentSlide = totalSlides / slidesToShow - 1;
    } else {
        currentSlide = index;
    }

    const offset = -currentSlide * 100 / slidesToShow;
    document.querySelector('.carousel-track').style.transform = `translateX(${offset}%)`;
}

function nextSlide() {
    showSlide(currentSlide + 1);
}

function prevSlide() {
    showSlide(currentSlide - 1);
}

function startAutoSlide() {
    autoSlideInterval = setInterval(nextSlide, 2500);
}

function stopAutoSlide() {
    clearInterval(autoSlideInterval);
}

showSlide(currentSlide);
startAutoSlide();

const carouselContainer = document.querySelector('.carousel-track');
carouselContainer.addEventListener('mouseover', stopAutoSlide);
carouselContainer.addEventListener('mouseout', startAutoSlide);

window.addEventListener('resize', () => showSlide(currentSlide));



