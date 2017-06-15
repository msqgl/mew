$(function () {

    $('#gift-modal').on('show.bs.modal', function (event) {
        var button = $(event.relatedTarget);
        var title = button.data('title');
        var modal = $(this);
        modal.find('.modal-title').text(title);
    });


    $("#gift-modal-button").on("click tap", function() {
        $(".step-1").fadeOut(function() {
            $(".step-2").fadeIn();
        });
    });

});