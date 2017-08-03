var RestModule = function () {

    var baseUrl = "http://miky-ele.ddns.net";
    var port = "8080";
    // var baseUrl = "http://localhost";
    // var port = "1234";
    var restGetAllGift = "/getAllGift.json";
    var restSaveGiftMsg = "/saveGiftMsg.json";

    function getAllGift(successFn, errorFn) {
        $.ajax({
            method: "GET",
            url: baseUrl + ":" + port + restGetAllGift,
            success: function (data) {
                if (!data.error) {
                    successFn(data);
                } else {
                    errorFn()
                }
            },
            error: function () {
                errorFn();
            }
        });
    }

    function saveGiftMsg(restData, successFn, errorFn) {
        $.ajax({
            method: "POST",
            url: baseUrl + ":" + port + restSaveGiftMsg,
            data: restData,
            success: function (data) {
                if (!data.error) {
                    successFn(data);
                } else {
                    errorFn();
                }
            },
            error: function () {
                errorFn();
            }
        });
    }

    function loadItemList(json) {
        var template = $('#template').html();
        Mustache.parse(template);
        json['data'][ json['data'].length - 1 ].last = true;
        var rendered = Mustache.render(template, json);
        $('#target').prepend(rendered);
        $.each($(".card-container"), function () {
            var button = $(this).find("button");
            var totalPrice = $(button).data("total-price");
            var consumedPrice = $(button).data("consumed-price");
            if (totalPrice <= consumedPrice) {
                var greenCheck = $(this).find(".green-check");
                $(greenCheck).removeClass("hidden");
                $(button).hide();
            }
        });
    }

    function modalLoadingError() {
        $("#gift-error").modal();
    }

    getAllGift(loadItemList, modalLoadingError);

    return {
        saveGiftMsg: saveGiftMsg
    }
}();