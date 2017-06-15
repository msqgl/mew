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
    if (classes.includes("slidebars")) {
        $.getScript(basePath + "slidebars.min.js");
    }
    if (classes.includes("js-lazy")) {
        $.getScript(basePath + "blazy.min.js");
    }
    if (classes.includes("js-mustache")) {
        $.getScript(basePath + "mustache.min.js");
    }
    if (classes.includes("wedding-list")) {
        $.getScript(basePath + "wedding-list.min.js");
    }

});