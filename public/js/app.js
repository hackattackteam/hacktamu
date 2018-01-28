(function() {
  var map = L.map('map').setView([47, -99], 6.8);
  var geojson = {};
  
  var style = {
    fillColor: "#00bb00",
    weight:2,
    opaccity: 1,
    color: 'white',
    dashArray: '3',
    fillOpacity: 0.7
  }

  function highlightFeature(e) {
    var layer = e.target;

    layer.setStyle({
        weight: 5,
        color: '#666',
        dashArray: '',
        fillOpacity: 0.7
    });

    if (!L.Browser.ie && !L.Browser.opera && !L.Browser.edge) {
        layer.bringToFront();
    }
  }

  function resetHighlight(e) {
    geojson.resetStyle(e.target);
  }

  function onEachFeature(feature, layer) {
    layer.on({
        mouseover: highlightFeature,
        mouseout: resetHighlight
    });
  }

  function attachGui() {  
    var info = L.control();

    info.onAdd = function (map) {
        this._div = L.DomUtil.create('div', 'info'); // create a div with a class "info"
        this.update();
        return this._div;
    };

    // method that we will use to update the control based on feature properties passed
    info.update = function (props) {
        this._div.innerHTML = '<h4>US Population Density</h4>' +  (props ?
            '<b>' + props.name + '</b><br />' + props.density + ' people / mi<sup>2</sup>'
            : 'Hover over a state');
    };
  }

  geojson = L.geoJson(window.data, {
    style: style,
    onEachFeature: onEachFeature
  }).addTo(map);

  map.dragging.disable();

info.addTo(map);

})();