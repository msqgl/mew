var RestModule = function () {

    var baseUrl = "http://w3dd1ng.ddns.net";
    var port = "8080";
    // var baseUrl = "http://localhost";
    // var port = "1234";
    var restGetAllGift = "/getAllGift";
    var restSaveGiftMsg = "/saveGiftMsg";

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

    return {
        getAllGift: getAllGift,
        saveGiftMsg: saveGiftMsg
    }
}();