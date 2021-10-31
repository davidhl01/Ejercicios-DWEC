var platform = new H.service.Platform({
    'apikey': 'yUSWI2u6C8y5lOubPk4nnuP2KxB06fmOawPb1TY-858'
});

// Obtain the default map types from the platform object:
var defaultLayers = platform.createDefaultLayers();

// Instantiate (and display) a map object:
var map = new H.Map(
    document.getElementById('mapContainer'),
    defaultLayers.vector.normal.map, {
        zoom: 10,
        center: { lat: 52.5, lng: 13.4 }
    });