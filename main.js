$(function () {

    var address1 = "Basilica San Nicolò, Via S. Nicolò, 1, 23900 Lecco LC";
    var address2 = "Hotel Villa Giulia, Frazione Parè, 69/73, 23868 Valmadrera LC";

    var mapId = "#map";

    var map = new GMaps({
        div: mapId,
        zoom: 13,
        lat: 45.854633,
        lng: 9.379350
    });

    GMaps.geocode({
        address: address1,
        callback: function (results, status) {
            if (status == 'OK') {
                var latlng = results[0].geometry.location;
                map.addMarker({
                    lat: latlng.lat(),
                    lng: latlng.lng()
                });
            }
        }
    });

    GMaps.geocode({
        address: address2,
        callback: function (results, status) {
            if (status == 'OK') {
                var latlng = results[0].geometry.location;
                map.addMarker({
                    lat: latlng.lat(),
                    lng: latlng.lng()
                });
            }
        }
    });

    $("#address-link-1").attr("href", "https://maps.google.com/?q=" + address1);
    $("#address-link-2").attr("href", "https://maps.google.com/?q=" + address2);

});
$(function () {

    $("#owl-example").owlCarousel({
        items: 2,
        loop: true,
        autoplay: true,
        mobileFirst: true,
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 2
            }
        }
    });
});