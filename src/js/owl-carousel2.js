$(function () {

    $("#owl-example").owlCarousel({
        items: 2,
        loop: true,
        autoplay: true,
        mobileFirst: true,
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 2
            }
        }
    });
});