var map = L.map('map');
map.fitBounds([[40.681339, -73.96302],
	[40.712437, -74.008423]]);


L.mapbox.accessToken = 'pk.eyJ1IjoiYms3NDEiLCJhIjoiZFNVcTNvdyJ9.h8G4i4ib7PicRCiejvZW6g';
// Replace 'examples.map-i87786ca' with your map id.
var mapboxTiles = L.tileLayer('https://{s}.tiles.mapbox.com/v3/bk741.09c0a8ed/{z}/{x}/{y}.png').addTo(map);


 

var benIcon = L.icon({
		iconUrl: 'http://www.capalino.com/wp-content/uploads/2010/07/Ben-headshot.jpg',
		iconSize: [38, 95],
		iconAnchor: [22, 94],
		popupAnchor: [-3, -76]
});

var workIcon = L.icon({
		iconUrl: 'http://www.capalino.com/wp-content/themes/newcapalino/images/logo.png',
		iconSize: [150, 95],
		iconAnchor: [22, 94],
		popupAnchor: [-3, -76]
});


var marker = L.marker([40.712437, -74.008423], {icon: workIcon}).addTo(map);
marker.bindPopup("Ben's Work").openPopup();

var marker = L.marker([40.681339, -73.96302], {icon: benIcon}).addTo(map);
marker.bindPopup("Ben's House").openPopup();




