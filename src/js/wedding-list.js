$(function () {

    $('#gift-modal').on('show.bs.modal', function (event) {
        var button = $(event.relatedTarget);
        var title = button.data('title');
        var modal = $(this);
        modal.find('.modal-title').text(title);
    });

    function validate() {
        var hasValidationError = false;

        var $contribute = $("#contribute");
        var $recipient = $("#recipient-name");
        var contribute = $contribute.val();
        var recipientName = $recipient.val();

        if (!contribute) {
            hasValidationError = true;
            $contribute.parent().addClass("has-error");
        }

        if (contribute) {
        //    TODO (msqgl) - check quantità cash!
        }

        if (!recipientName) {
            hasValidationError = true;
            $recipient.parent().addClass("has-error");
        }

        return hasValidationError;
    }


    $("#gift-modal-button").on("click tap", function () {

        if (!validate()) {
            $(".step-1").fadeOut(function () {
                $(".step-2").fadeIn();
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
    }, 5000)
});