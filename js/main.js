


let burger = document.querySelector(".burger");

burger.addEventListener("click", function () {

    let navigation = document.querySelector(".nav__menu");
    navigation.classList.toggle("active");
})

document.querySelectorAll('.nav__item').forEach(function(link) {
    link.addEventListener('click', function() {
        document.querySelector('.nav__menu').classList.toggle('active');
    });
});

$(document).ready(function () {
    $(".scroll-link").click(function (e) {
        e.preventDefault(); 

        let targetId = $(this).attr("href");
        let targetOffset = $(targetId).offset().top;

        $("html, body").animate(
            {
                scrollTop: targetOffset,
            },
            2000
        );
    });
});
$('.owl-carousel').owlCarousel({
    autoplay: true,
    autoplayTimeout: 6500,
    autoplaySpeed: 1000,
    loop: true,
    margin: 50,
    responsive: {
        0: {
            items: 1
        },
        768: {
            items: 2
        },
        1100: {
            items: 3
        }
    }
});
