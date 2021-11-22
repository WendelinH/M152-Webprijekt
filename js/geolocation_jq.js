$(document).ready(function(){
  $("#btn_find_me").on('click', function() {
    if (navigator.geolocation) {
      $("#map_container").html("<div id='map'></div>")
      navigator.geolocation.getCurrentPosition(
        showPosition,
        showDefaultLocation
      )
      $("#map").css("height", "300px");
    } else {
      alert("No geolocation possible")
    }
  })

  function showDefaultLocation() {
    showPosition(
      {coords:{
          latitude: 41.303917,
          longitude: -81.901694
        }
      }
    )
  }

  function showPosition(pos) {
    $("#geo_location_output").html(
      "Latitude: " + pos.coords.latitude + "<br>" +
      "Longitude: " + pos.coords.longitude
    )
    var mapOptions = {
      center: [pos.coords.latitude, pos.coords.longitude],
      zoom: 17
    }
    // Creating a map object
    var map = new L.map('map', mapOptions);
    // Creating a map layer object
    var layer = new L.TileLayer(
      'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
    );
    // Adding layer to the map
    map.addLayer(layer);

    var marker = L.marker([pos.coords.latitude, pos.coords.longitude])
    .addTo(map)
    .bindPopup(
      "<b>Koordinaten: </b>" + "<br>" +
      "&nbsp; latitude: " + pos.coords.latitude + "<br>" +
      "&nbsp; longitude: " + pos.coords.longitude
    )
    .openPopup();

    var points = []
    var myline = L.polyline(points, {
      color: "red"
    }).addTo(map)

    map.on('click', function (pos) {
      myline.addLatLng(pos.latlng)
    })
  }
})
