// function get_location() {
//   navigator.geolocation.getCurrentPosition(show_map);
// };


// function show_map(position) {
//   var latitude = position.coords.latitude;
//   var longitude = position.coords.longitude;
//   console.log('success! latitude: ' + latitude + ', longitude: ' + longitude);
// };

var map = L.map('map').setView([37.783691499999996, -122.4091494], 13);

L.tileLayer('http://{s}.tiles.mapbox.com/v3/kevin1liang.inaoeoj4/{z}/{x}/{y}.png', {
    attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
    maxZoom: 18
}).addTo(map);

// get_location();

//MapID: kevin1liang.inaoeoj4