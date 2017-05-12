function init() {
	document.addEventListener("deviceready",onDeviceReady, false);
}

var map;
function onDeviceReady() {
	var div = document.getElementById("map");
	map = plugin.google.maps.Map.getMap(div, {
		'mapType': plugin.google.maps.MapTypeId.ROADMAP,
		'controls': {
			'compass': true,
			'myLocationButton': true,
			'indoorPicker': true,
			'zoom': true
		},
		'gestures': {
			'scroll': true,
			'tilt': true,
			'rotate': true,
			'zoom': true
		},
		camera: {
			target: {
				lat: 50.0593677, lng: 19.9375843
			},
			zoom: 10
		}
	});

	map.addEventListener(plugin.google.maps.event.MAP_READY, onMapReady);
}

function onMapReady() {
	var stButton = document.getElementById("stations");
	stButton.addEventListener("click", onBtnClicked);
}

function onBtnClicked() {
	var data = [
		{
			'position': {lat: 50.057678, lng: 19.926189},
			'title': "Kraków, Aleja Krasińskiego",
			'snippet': "Kraków, Aleja Krasińskiego" 
		},
		{
			'position': {lat: 50.057447, lng: 19.946008},
			'title': "Kraków, ul. Dietla",
			'snippet': "Kraków, ul. Dietla"
		},
		{
			'position': {lat: 50.010575, lng: 19.949189},
			'title': "Kraków, ul. Bujaka",
			'snippet': "Kraków, ul. Bujaka"
		},
		{
			'position': {lat: 50.081197, lng: 19.895358},
			'title': "Kraków, ul. Złoty Róg",
			'snippet': "Kraków, ul. Złoty Róg"
		},
		{
			'position': {lat: 50.069308, lng: 20.053492},
			'title': "Kraków, ul. Bulwarowa",
			'snippet': "Kraków, ul. Bulwarowa"
		},
		{
			'position': {lat: 50.099361, lng: 20.018317},
			'title': "Kraków, os. Piastów",
			'snippet': "Kraków, os. Piastów"
		},
		{
			'position': {lat: 50.0192 , lng: 20.016803},
			'title': "Kraków, ul. Telimeny",
			'snippet': "Kraków, ul. Telimeny"
		},
		{
			'position': {lat: 50.100569, lng: 20.122561},
			'title': "Kraków, os. Wadów",
			'snippet': "Kraków, os. Wadów"
		}
	];

	function addMarkers(data, callback) {
		for (var i = 0; i < data.length; i++) {
			map.addMarker(data[i])
		}
	}
		
	addMarkers(data, function(markers) {
		markers[markers.length - 1].showInfoWindow();
	});
	
	map.addEventListener(plugin.google.maps.event.MY_LOCATION_BUTTON_CLICK, onLocBtnClick);
}

function onLocBtnClick() {
	function onSuccess(location) {
		var msg = ["Current location:\n",
		"latitude:" + location.latLng.lat,
		"longitude:" + location.latLng.lng,
		"speed:" + location.speed,
		"time:" + location.time,
		"bearing:" + location.bearing].join("\n");
		
		map.addMarker({
			'position': location.latLng,
			'title': msg,
		}, function(marker) {
			marker.showInfoWindow();
			map.animateCamera({
				target: location.latLng,
				zoom: 16
			}, function() {
				marker.showInfoWindow();
			});
		});
	};

	var onError = function(msg) {
		alert(JSON.stringify(msg));
	};

	map.clear();
	map.getMyLocation(onSuccess, onError);
}