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
    mobileFirst: true,
    variableWidth: true
   });

   jQuery('.gallery-slider__second').slick({
    arrows: false,
    adaptiveHeight: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    speed: 150,
    mobileFirst: true,
    variableWidth: true
   });

   
   


// jQuery('.freySoft-process__inner').slick({
//     arrows: false,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     speed: 150,
//     centerMode: true,
//     focusOnSelect: true,
//     dots: true,
//     adaptiveHeight: true,
//     variableWidth: true,
//     mobileFirst: true,
//     infinite: true,
//     responsive:[
//         {
//         breakpoint: 768,
//         settings: {
//             slidesToShow: 2,
//         },
//       },
//       {
//         breakpoint: 1440,
//         settings: 'unslick',
//       }
//     ],
//    });


});