//global map variable
var map;
//AMD require statement to all in the classes that we be used from the API.  More info at: https://dojotoolkit.org/documentation/tutorials/1.10/modules/
 require([
  "esri/Map",
  "esri/views/SceneView",
  "esri/layers/Layer",
  "dojo/domReady!"
], function(
  Map, SceneView, Layer
) {

  var map = new Map({
    basemap: "gray"
  });

  var view = new SceneView({
    map: map,
    container: "mapDiv",
    zoom: 7,
    center: [-87, 34]
  });

  /************************************************
   *
   * Create a layer from an existing Portal item hosted
   * in ArcGIS Online using the ID of the item.
   *
   *************************************************/
  Layer.fromPortalItem({
      portalItem: { // autocasts as new PortalItem()
        id: "4e435a3537b34f4290f3a726d86e9458"
      }
    }).then(addLayer)
    .otherwise(rejection);

  // Adds the layer to the map once it loads
  function addLayer(lyr) {
    map.add(lyr);
  }

  function rejection(err) {
    console.log("Layer failed to load: ", err);
  }
});
