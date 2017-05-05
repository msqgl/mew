$(function () {

    var controller = new slidebars();
    controller.init();

    $(".js-toggle-main-menu").on("click tap", function (event) {
        event.preventDefault();
        event.stopPropagation();
        controller.toggle("main-menu");
    });

    $(document).on('click tap', '.js-close-any', function (event) {
        if (controller.getActiveSlidebar()) {
            event.preventDefault();
            event.stopPropagation();
            controller.close();
        }
    });

    $(controller.events).on('opening', function (event) {
        $('[canvas]').addClass('js-close-any');
    });

    $(controller.events).on('closing', function (event) {
        $('[canvas]').removeClass('js-close-any');
    });

});