import "./scss/style.scss";
import jQuery from "jquery";
import "./slider/slick.min.js";


jQuery(document).ready(function () {

//    jQuery('.gallery-slider').slick({
//     arrows: false,
//     adaptiveHeight: true,
//     slidesToShow: 4,
//     slidesToScroll: 1,
//     speed: 150,
//     centerMode: true,
//     focusOnSelect: true,
//     responsive:[{
//         breakpoint: 1440,
//         settings: {
//             slidesToShow: 3,
//         },
//         breakpoint: 320,
//         settings: {
//             slidesToShow: 2,
//         }
//     }],
//     mobileFirst: true
//     variableWidth: true




//    });


jQuery('.freySoft-process__inner').slick({
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 150,
    centerMode: true,
    focusOnSelect: true,
    dots: true,
    // variableWidth: true,
    responsive:[{
        // breakpoint: 768,
        // settings: {
        //     slidesToShow: 2,
        // },
        breakpoint: 1440,
        settings: 'unslick',
    }],
    // responsive:[{
    //     breakpoint: 1440,
    //     settings: 'unslick',


    // }],

    mobileFirst: true



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





// jQuery(window).on('resize', function() {

//         if (jQuery(window).width() <= 768) {
//                 jQuery('.freySoft-process__inner').slick({
//                     arrows: false,
//                     slidesToShow: 2,
//                     slidesToScroll: 1,
//                     speed: 150,
//                     centerMode: true,
//                     focusOnSelect: true,
//                     dots: true,
//                     responsive:[{
//                         breakpoint: 768,
//                         settings: {
//                             slidesToShow: 1,
//                         },
//                         // breakpoint: 1440,
//                         // settings: 'unslick'
//                     }],
//                 });
//         } 
// });

});