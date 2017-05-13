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
	
	setupPush();
}

function stationsOnMap() {
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
			map.addMarker(data[i], function(marker) {
				marker.addEventListener(plugin.google.maps.event.INFO_CLICK, function() {
					alert("Stan powietrza: " + document.getElementById('station1Stan').value);
				});
			});
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

function onInfoClick() {
	switch (data[i]) {
    case 0:
        day = "Sunday";
        break;
    case 1:
        day = "Monday";
        break;
    case 2:
        day = "Tuesday";
        break;
    case 3:
        day = "Wednesday";
        break;
    case 4:
        day = "Thursday";
        break;
    case 5:
        day = "Friday";
        break;
    case 6:
        day = "Saturday";
}
}

function setupPush() {
	var push = PushNotification.init({
		"android": {
			"senderID": "781429210866"
		}
	});

	push.on('registration', function(data) {
		console.log("registration event: " + data.registrationId);
		alert("registration event: " + data.registrationId);
		document.getElementById('test').innerHTML = data.registrationId;
		var oldRegId = localStorage.getItem('registrationId');
		if (oldRegId !== data.registrationId) {
			// Save new registration ID
			localStorage.setItem('registrationId', data.registrationId);
			// Post registrationId to your app server as the value has changed
		}
	});

	push.on('error', function(e) {
		console.log("push error = " + e.message);
		alert("push error = " + e.message);
	});
	
	push.on('notification', function(data) {
        console.log('notification event');
        alert('notification event');
        navigator.notification.alert(
            data.message,         // message
            null,                 // callback
            data.title,           // title
            'Ok'                  // buttonName
        );

	push.finish(function() {
        console.log('success');
        }, function() {
            console.log('error');
        });
    });
}