$(function () {

    $("#getting-started").countdown("2017/09/22", function(event) {
        $(this).text(
            event.strftime('%D giorni %H:%M:%S')
        );
    });

});