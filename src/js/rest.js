var RestModule = function () {

    var baseUrl = "http://w3dd1ng.ddns.net";
    var port = "8080";
    var restGetAllGift = "/getAllGift";

    function getAllGift(successFn) {
        $.ajax({
            method: "GET",
            url: baseUrl + ":" + port + restGetAllGift,
            success: function (data) {
                if (!data.error) {
                    successFn(data);
                } else {
                    //    TODO: manage error
                }
            }
        });
    }

    return {
        getAllGift: getAllGift
    }
}();