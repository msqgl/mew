$(function () {

    var $countdownSelector = $("#getting-started");
    var $jsCountdown = $("#js-countdown");
    var $H2 = $jsCountdown.find("h2");

    var weddingDateTime = "2017/07/24 17:22:00";

    var updateCountdown = function (event) {
        $countdownSelector.text(
            event.strftime('%D giorni %H:%M:%S')
        );
    };

    var finishCountdown = function () {
        $H2.hide()
    };

    $countdownSelector.countdown(weddingDateTime)
        .on("update.countdown", updateCountdown)
        .on("finish.countdown", finishCountdown)
    ;
});