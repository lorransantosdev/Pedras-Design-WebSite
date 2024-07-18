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



