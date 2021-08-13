async function run() {
  const locations = await getBusLocations();
  console.log(new Date());
  console.log(locations);
  console.log(locations[0].attributes.latitude);
  console.log(locations[0].attributes.longitude);
  var b = locations[0].attributes.latitude;
  var a = locations[0].attributes.longitude;
  
  
  LL.push([a, b],);
  
  
  
  

  //timer
  setTimeout(run, 10000);
}

async function getBusLocations() {
  const url = 'https://api-v3.mbta.com/vehicles?filter[route]=1&include=trip';
  const response = await fetch(url);
  const json     = await response.json();
  return json.data;
}

run();

const LL = []






// This array contains the coordinates for all bus stops between MIT and Harvard


// TODO: add your own access token
mapboxgl.accessToken = 'pk.eyJ1IjoicGl6emF0YWNvMTUiLCJhIjoiY2tzMGx5MGM0MGhxazJ2b2M5ODUwcWI5OSJ9.JKVnfYhWvkKGjd0r0CSeYA';

// This is the map instance
let map = new mapboxgl.Map({
  container: 'map',
  style: 'mapbox://styles/mapbox/streets-v11',
  center: [-71.104081, 42.365554],
  zoom: 14,
});

// TODO: add a marker to the map at the first coordinates in the array busStops. The marker variable should be named "marker"
var marker = new mapboxgl.Marker()
    .setLngLat([-71.092761, 42.357575])
    .addTo(map);

// counter here represents the index of the current bus stop
let counter = 0;
function move() {
  setTimeout(() =>{
    
    marker.setLngLat(LL[counter]);
    counter++;
    move();
  }, 11000);
  // TODO: move the marker on the map every 1000ms. Use the function marker.setLngLat() to update the marker coordinates
  // Use counter to access bus stops in the array busStops
  // Make sure you call move() after you increment the counter.
}



// Do not edit code past this point
if (typeof module !== 'undefined') {
  module.exports = { move };
}