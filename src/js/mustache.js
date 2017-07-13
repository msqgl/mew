$(function () {

    function loadItemList(json) {
        var template = $('#template').html();
        Mustache.parse(template);
        var rendered = Mustache.render(template, json);
        $('#target').prepend(rendered);
        $.each($(".card-container"), function () {
            var button = $(this).find("button");
            var totalPrice = $(button).data("total-price");
            var consumedPrice = $(button).data("consumed-price");
            console.log("totalPrice " + totalPrice + ", consumedPrice " + consumedPrice);
            if (totalPrice <= consumedPrice) {
                var greenCheck = $(this).find(".green-check");
                $(greenCheck).removeClass("hidden");
                $(button).hide();
            }
        });
    }

    function modalLoadingError() {
        $("#modalError").modal();
    }

    RestModule.getAllGift(loadItemList, modalLoadingError);

});