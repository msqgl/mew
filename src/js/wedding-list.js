$(function () {

    var $contribute = $("#contribute");
    var $recipient = $("#recipient-name");
    var $step1 = $(".step-1");
    var $step2 = $(".step-2");
    var $gift = $('#gift-modal');

    $gift.on('show.bs.modal', function (event) {
        var button = $(event.relatedTarget);
        var title = button.data('title');
        var modal = $(this);
        modal.find('.modal-title').text(title);

        var consumedPrice = button.data("consumed-price");
        var totalPrice = button.data("total-price");
        var delta = totalPrice - consumedPrice;
        $contribute.attr("max", delta);
        $contribute.attr("min", 0);

        $step1.fadeIn();
        $step2.fadeOut();

        $contribute.removeClass("has-error");
        $contribute.val("");
        $recipient.removeClass("has-error");
        $recipient.val("");
    });

    $gift.on("hide.bs.modal", function () {
        if ($step2.is(":visible")) {
            window.location.reload();
        }
    });

    function validate(totalPrice, consumedPrice) {
        var hasValidationError = false;

        var contributeVal = $contribute.val();
        var recipientNameVal = $recipient.val();

        if (!contributeVal) {
            hasValidationError = true;
            $contribute.parent().addClass("has-error");
        }

        if (contributeVal) {
            var delta = totalPrice - consumedPrice;
            if (contributeVal > delta) {
                $contribute.parent().addClass("has-error");
            }
        }

        if (!recipientNameVal) {
            hasValidationError = true;
            $recipient.parent().addClass("has-error");
        }

        return hasValidationError;
    }


    $("#gift-modal-button").on("click tap", function () {
        var totalPrice = $(this).data("total-price");
        var consumedPrice = $(this).data("consumed-price");

        if (!validate(totalPrice, consumedPrice)) {
            $step1.fadeOut(function () {
                $step2.fadeIn();
            });
        }
    });

    function changeBackground() {
        $('.jumbotron').fadeTo('slow', 0.3, function () {
            var seychellesClass = "bg-seychelles";
            var japanClass = "bg-japan-lantern";
            if ($(this).hasClass(seychellesClass)) {
                $(this).removeClass(seychellesClass);
                $(this).addClass(japanClass);
            } else {
                $(this).removeClass(japanClass);
                $(this).addClass(seychellesClass);
            }
        }).fadeTo('slow', 1);
    }

    setInterval(function () {
        changeBackground()
    }, 5000);

    $("[type='number']").keypress(function (evt) {
        evt.preventDefault();
    });
});