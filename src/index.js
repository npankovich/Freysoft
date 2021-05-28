import "./scss/style.scss";
import jQuery from "jquery";
import "./slider/slick.min.js";


jQuery(document).ready(function () {

   jQuery('.gallery-slider').slick({
    arrows: false,
    adaptiveHeight: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    speed: 150,
    centerMode: true,
    focusOnSelect: true,
    responsive:[{
        breakpoint: 1440,
        settings: {
            slidesToShow: 3,
        },
        breakpoint: 320,
        settings: {
            slidesToShow: 2,
        }
    }],
    mobileFirst: true
    // variableWidth: true




   });

//    jQuery('.gallery-slider').slick({
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     arrows: false,
//     fade: true,
//     asNavFor: '.slider-nav'
//   });
//   jQuery('.slider-nav').slick({
//     slidesToShow: 3,
//     slidesToScroll: 1,
//     asNavFor: '.slider-for',
//     dots: true,
//     centerMode: true,
//     focusOnSelect: true
//   });


});