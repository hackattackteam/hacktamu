require([
  "esri/Map",
  "esri/layers/Layer",
  "esri/views/MapView",
  "dojo/domReady!"
], function(Map, Layer, MapView){
  var map = new Map({

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
    zoom: 3,  // Sets zoom level based on level of detail (LOD)
    center: [-100, 47.5],  // Sets center point of view using longitude,latitude
    ui: {
        components: [ "attribution" ]
      }
  });
  //Disable mouse zoom
  view.on("mouse-wheel", function(evt){
    evt.stopPropagation();
  });
  //Disable double-click zoom
  view.on("double-click", function(evt){
    evt.stopPropagation();
  });
  //Disable touch zoom
  view.on("drag", function(evt){
    evt.stopPropagation();
  });
});
