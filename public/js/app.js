require([
  "esri/Map",
  "esri/layers/Layer",
  "esri/views/MapView",
  "dojo/domReady!"
], function(Map, Layer, MapView){
  var map = new Map({
    basemap: "streets"
  });

  Layer.fromPortalItem({
    portalItem: {id: "73d81e36cb9a4d71b265d04c7bc80759"}
  }).then(function(lyr){
  // Adds layer to the map
  map.add(lyr);
  });

  var view = new MapView({
    container: "viewDiv",  // Reference to the scene div created in step 5
    map: map,  // Reference to the map object created before the scene
    zoom: 7,  // Sets zoom level based on level of detail (LOD)
    center: [-100, 47]  // Sets center point of view using longitude,latitude
  });
});