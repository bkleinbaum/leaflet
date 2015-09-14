var map = L.map('map');
map.fitBounds([[40.681339, -73.96302],
	[40.712437, -74.008423]]);


L.tileLayer('https://api.tiles.mapbox.com/v4/duncangraham.552f58b0/page.html?access_token=pk.eyJ1IjoiZHVuY2FuZ3JhaGFtIiwiYSI6IlJJcWdFczQifQ.9HUpTV1es8IjaGAf_s64VQ#5/35.675/-92.681', {
    maxZoom: 18
}).addTo(map);
 

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




