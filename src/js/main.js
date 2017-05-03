$(function () {

    var bodyId = $("body").prop("id");
    var basePath = "custom/js/";

    switch (bodyId) {
        case 'js_maps':
            $.getScript(basePath + "maps.min.js");
            break;
        case 'js_carousel':
            $.getScript(basePath + "owl-carousel2.min.js");
            break;
        case 'countdown':
            $.getScript(basePath + "countdown.min.js");
            break;
        case 'scroll':
            $.getScript(basePath + "scroll.min.js");
            break;
    }

});