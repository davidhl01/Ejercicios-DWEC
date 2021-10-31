var platform = new H.service.Platform({
    'apikey': 'IQbccdW5ia8_XqusUQGSmOC16REi0MZhkWsg2w2KcYw'
});

var options = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0
};

function ecuentrapos(pos) {
    var crd = pos.coords;

    /*document.write('<br><br>Your current position is: <br><br>');
    document.write(`Latitude : ${crd.latitude}<br>`);
    document.write(`Longitude: ${crd.longitude}<br>`);
    document.write(`More or less ${crd.accuracy} meters.<br>`);
    document.write("Su posición actual es: " + crd.latitude, crd.longitude);*/

    // Obtain the default map types from the platform object:
    var defaultLayers = platform.createDefaultLayers();

    // Instantiate (and display) a map object:
    var map = new H.Map(
        document.getElementById('mapContainer'),
        defaultLayers.vector.normal.map, {
            zoom: 15,
            center: { lat: crd.latitude, lng: crd.longitude }
        });

    var svgMarkup = '<svg width="24" height="24" ' +
        'xmlns="http://www.w3.org/2000/svg">' +
        '<rect stroke="white" fill="black" x="1" y="1" width="22" ' +
        'height="22" /><text x="12" y="18" font-size="12pt" ' +
        'font-family="Arial" font-weight="bold" text-anchor="middle" ' +
        'fill="cyan">TÚ</text></svg>';

    var icon = new H.map.Icon(svgMarkup),
        coords = { lat: crd.latitude, lng: crd.longitude },
        marker = new H.map.Marker(coords, { icon: icon });

    //crear marcador
    map.addObject(marker);
    map.setCenter(coords);

    // Create the parameters for the routing request:
    var routingParameters = {
        'routingMode': 'fast',
        'transportMode': 'car',
        // The start point of the route:
        'origin': crd.latitude + "," + crd.longitude,
        // The end point of the route:
        'destination': '37.18598676186349, -3.603289236114177 ',
        // Include the route shape in the response
        'return': 'polyline'
    };

    // Define a callback function to process the routing response:
    var onResult = function(result) {
        // ensure that at least one route was found
        if (result.routes.length) {
            result.routes[0].sections.forEach((section) => {
                // Create a linestring to use as a point source for the route line
                let linestring = H.geo.LineString.fromFlexiblePolyline(section.polyline);

                // Create a polyline to display the route:
                let routeLine = new H.map.Polyline(linestring, {
                    style: { strokeColor: 'blue', lineWidth: 3 }
                });

                // Create a marker for the start point:
                let startMarker = new H.map.Marker(section.departure.place.location);

                // Create a marker for the end point:
                let endMarker = new H.map.Marker(section.arrival.place.location);

                // Add the route polyline and the two markers to the map:
                map.addObjects([routeLine, startMarker, endMarker]);

                // Set the map's viewport to make the whole route visible:
                map.getViewModel().setLookAtData({ bounds: routeLine.getBoundingBox() });
            });
        }
    };

    // Get an instance of the routing service version 8:
    var router = platform.getRoutingService(null, 8);

    // Call calculateRoute() with the routing parameters,
    // the callback and an error callback function (called if a
    // communication error occurs):
    router.calculateRoute(routingParameters, onResult,
        function(error) {
            alert(error.message);
        });
}


function error(err) {
    console.warn(`ERROR(${err.code}): ${err.message}`);
}

navigator.geolocation.getCurrentPosition(ecuentrapos, error, options);