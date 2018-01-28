function landingPage() {
  document.querySelector("#landing-page").style.display = "";
  document.querySelector("#about-page").style.display = "none";
  document.querySelector("#map-page").style.display = "none";

  document.querySelector("#home-li").classList.add('active');
  document.querySelector("#about-li").classList.remove('active');
  document.querySelector("#map-li").classList.remove('active');
}

function aboutPage() {
  document.querySelector("#landing-page").style.display = "none";
  document.querySelector("#about-page").style.display = "";
  document.querySelector("#map-page").style.display = "none";

  document.querySelector("#home-li").classList.remove('active');
  document.querySelector("#about-li").classList.add('active');
  document.querySelector("#map-li").classList.remove('active');
}

function mapPage() {
  console.log('map displayed');
  console.log(document.querySelector("#map-page").style.display);
  document.querySelector("#landing-page").style.display = "none";
  document.querySelector("#about-page").style.display = "none";
  document.querySelector("#map-page").style.display = "";
  console.log(document.querySelector("#map-page").style.display);

  document.querySelector("#home-li").classList.remove('active');
  document.querySelector("#about-li").classList.remove('active');
  document.querySelector("#map-li").classList.add('active');
}

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
    container: "map-page",  // Reference to the scene div created in step 5
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
