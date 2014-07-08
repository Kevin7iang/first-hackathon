var map = L.map('map').locate({setView: false, maxZoom: 15})/*;setView([37.783688, -122.4091485], 15);*/
var storage = [];
L.tileLayer('http://{s}.tiles.mapbox.com/v3/kevin1liang.inaoeoj4/{z}/{x}/{y}.png', {
    attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
    maxZoom: 18
}).addTo(map);

$('#getLocation').on('click', function(){
  map.locate({setView: true, maxZoom: 15});
  L.marker([37.783688, -122.4091485]).addTo(map).bindPopup('Hack Reactor');
});

map.on('click', function(e) {
  var activity = prompt("Please enter activity type:");
  var marker = L.marker([e.latlng.lat, e.latlng.lng], {title: activity});
  marker.addTo(map).bindPopup(activity);
  storage.push(marker);
  console.log(marker.options.title);
  console.log(typeof(marker.options.title));
  // L.marker.title = prompt('Enter an activity:');
  console.log("Latitude: " + e.latlng.lat + ", Longitude: " + e.latlng.lng + ", Title: " + activity);
  console.log(storage);
  // console.log(storage.length);
  // for(i=0; i<storage.length; i++) {
  //   if 
  // }
});

$('#soccer').on('click', function(){
  for (i=0; i<storage.length;i++){
    if (storage[i].options.title === 'soccer')
      storage[i].setOpacity(1.0);
    else{
      storage[i].setOpacity(0.2);
    }
  }
});

$('#hiking').on('click', function(){
  for (i=0; i<storage.length;i++){
    if (storage[i].options.title === 'hiking')
      storage[i].setOpacity(1.0);
    else{
      storage[i].setOpacity(0.2);
    }
  }
});

$('#baseball').on('click', function(){
  for (i=0; i<storage.length;i++){
    if (storage[i].options.title === 'baseball')
      storage[i].setOpacity(1.0);
    else{
      storage[i].setOpacity(0.2);
    }
  }
});

$('#basketball').on('click', function(){
  for (i=0; i<storage.length;i++){
    if (storage[i].options.title === 'basketball')
      storage[i].setOpacity(1.0);
    else{
      storage[i].setOpacity(0.2);
    }
  }
});

$('#hockey').on('click', function(){
  for (i=0; i<storage.length;i++){
    if (storage[i].options.title === 'hockey')
      storage[i].setOpacity(1.0);
    else{
      storage[i].setOpacity(0.2);
    }
  }
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

 
//if !activity then opacity = 0
