//global map variable
var map;
//AMD require statement to all in the classes that we be used from the API.  More info at: https://dojotoolkit.org/documentation/tutorials/1.10/modules/
require([
  "esri/Map",
  "esri/views/SceneView",
  "dojo/domReady!"
  ],
  function(
    Map,
    SceneView
  ) {

  // Create the Map
  var map = new Map({
    basemap: "streets"
  });

  // Create the SceneView
  var view = new SceneView({
      container: "mapDiv",
      map: map
  });

  // Creates a layer from a Portal layer item id
  Layer.fromPortalItem({
    portalItem: {
      id: "4e435a3537b34f4290f3a726d86e9458"
    }
  }).then(function(lyr){
    // Adds layer to the map
    map.add(lyr);
  });
});
