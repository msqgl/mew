$(function () {

    function loadItemList(json) {
        var template = $('#template').html();
        Mustache.parse(template);
        var rendered = Mustache.render(template, json);
        $('#target').prepend(rendered);
    }

    function modalLoadingError() {
        $("#modalError").modal();
    }

    RestModule.getAllGift(loadItemList, modalLoadingError);

});