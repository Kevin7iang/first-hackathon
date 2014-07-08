var map = L.map('map').locate({setView: false, maxZoom: 15})/*;setView([34.783691499999996, -100.4091494], 15);*/

L.tileLayer('http://{s}.tiles.mapbox.com/v3/kevin1liang.inaoeoj4/{z}/{x}/{y}.png', {
    attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
    maxZoom: 18
}).addTo(map);

$('.getLocation').on('click', function(){
  console.log("CLICKED");
  map.locate({setView: true, maxZoom: 15});
});




//MapID: kevin1liang.inaoeoj4
 
// /** bind the locationfound event to the function onLocationFound()
//     in other words, tell Leaflet what to do once locate() is successful 
// **/
// mymap.on('locationfound', onLocationFound);
 
// function onLocationFound(e) {
//     // create a marker at the users "latlng" and add it to the map
//     L.marker(e.latlng).addTo(mymap);
// }
