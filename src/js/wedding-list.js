$(function () {

    var $contribute = $("#contribute");
    var $sender = $("#sender");
    var $messageText = $("#message-text");
    var $step1 = $(".step-1");
    var $step2 = $(".step-2");
    var $stepError = $(".step-error");
    var $gift = $('#gift-modal');
    var $giftModalButton = $("#gift-modal-button");

    function manageRestError() {
        $step1.fadeOut(function () {
            $stepError.fadeIn();
        });
    }

    function manageRestSuccess() {
        $step1.fadeOut(function () {
            $step2.fadeIn();
        });
    }

    $gift.on('show.bs.modal', function (event) {
        var button = $(event.relatedTarget);
        var title = button.data('title');
        var modal = $(this);
        modal.find('.modal-title').text(title);

        var consumedPrice = button.data("consumed-price");
        var totalPrice = button.data("total-price");
        var delta = totalPrice - consumedPrice;
        $contribute.attr("placeholder", "Massimo " + delta + " €");
        $contribute.attr("max", delta);
        $contribute.attr("min", 0);

        $step1.fadeIn();
        $step2.fadeOut();

        $contribute.val("");
        $sender.val("");
        $contribute.parent().removeClass("has-error");
        $sender.parent().removeClass("has-error");

        var idGift = button.data("id-gift");
        $giftModalButton.data("id-gift", idGift);
        $giftModalButton.data("consumed-price", consumedPrice);
        $giftModalButton.data("total-price", totalPrice);
    });

    $gift.on("hide.bs.modal", function () {
        if ($step2.is(":visible")) {
            window.location.reload();
        }
    });

    function validate(totalPrice, consumedPrice) {
        console.log("totalPrice " + totalPrice + ", consumedPrice " + consumedPrice);
        var hasValidationError = false;

        var contributeVal = $contribute.val();
        var senderNameVal = $sender.val();

        if (!contributeVal) {
            console.log("Validation error 1");
            hasValidationError = true;
            $contribute.parent().addClass("has-error");
        }

        if (contributeVal) {
            var delta = totalPrice - consumedPrice;
            if (contributeVal > delta) {
                console.log("Validation error 2");
                hasValidationError = true;
                $contribute.parent().addClass("has-error");
            }
        }

        if (!senderNameVal) {
            console.log("Validation error 3");
            hasValidationError = true;
            $sender.parent().addClass("has-error");
        }

        return hasValidationError;
    }


    $giftModalButton.on("click tap", function () {
        var totalPrice = $(this).data("total-price");
        var consumedPrice = $(this).data("consumed-price");

        $contribute.parent().removeClass("has-error");
        $sender.parent().removeClass("has-error");

        if (!validate(totalPrice, consumedPrice)) {

            var restData = {
                idGift: $(this).data("id-gift"),
                msg: $messageText.val(),
                sender: $sender.val(),
                amount: $contribute.val()
            };
            RestModule.saveGiftMsg(restData, manageRestSuccess, manageRestError);
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
        if (evt.which < 48 || evt.which > 57) {
            evt.preventDefault();
        }
    });
});