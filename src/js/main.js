$(function () {

    var bodyClass = $("body").prop("class");
    var basePath = "custom/js/";

    var classes = bodyClass.split(" ");

    if (classes.includes("js_maps")) {
        $.getScript(basePath + "maps.min.js");
    }
    if (classes.includes("js_carousel")) {
        $.getScript(basePath + "owl-carousel2.min.js");
    }
    if (classes.includes("countdown-page")) {
        $.getScript(basePath + "countdown.min.js");
    }
    if (classes.includes("scroll")) {
        $.getScript(basePath + "scroll.min.js");
    }

});