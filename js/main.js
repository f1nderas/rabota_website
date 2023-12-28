
const a = document.querySelector(".intersectoral-sec4__block-list");
if (document.documentElement.clientWidth <= 991 && a ) {
    $(".intersectoral-sec4__block-list").slick({
        dots:true,
        slidesToShow: 2,
        slidesToScroll: 2,
        // variableWidth: true,
        responsive: [
            {
              breakpoint: 767,
              settings: {
                arrows: false,
                // centerMode: true,
                centerPadding: '40px',
                slidesToScroll: 1,
                slidesToShow: 1
              }
            },
            // {
            //   breakpoint: 320,
            //   settings: {
            //     arrows: false,
            //     centerMode: true,
            //     centerPadding: '40px',
            //     slidesToShow: 1
            //   }
            // }
          ]
    });
}