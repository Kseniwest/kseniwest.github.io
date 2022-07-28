$(document).ready(function(){
    $('.carousel__inner').slick({
        speed: 1200,
        prevArrow: '<button type="button" class="slick-prev"><img src="icons/left.svg" alt="left"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="icons/right.svg" alt="right"></button>',
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    dots: true,
                    arrows: false,
                    dotsClass: 'slick-dots'
                }
            }
        ]
    });
  });