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

function stationsAndMeOnMap() {
	var stla = [];
	var myLat;
	var myLng;
	var stStany = [
		document.getElementById('station1Stan').innerHTML,
		document.getElementById('station2Stan').innerHTML,
		document.getElementById('station3Stan').innerHTML,
		document.getElementById('station4Stan').innerHTML,
		document.getElementById('station5Stan').innerHTML,
		document.getElementById('station6Stan').innerHTML,
		document.getElementById('station7Stan').innerHTML,
		document.getElementById('station8Stan').innerHTML,
	]
	var icons = [];
	for (i = 0; i < stStany.length; i++) {
		switch (stStany[i]) {
		case "Bardzo dobry":
			icons[i] = 'blue';  // green = lime
			break;
		case "Dobry":
			icons[i] = 'green';
			break;
		case "Umiarkowany":
			icons[i] = 'yellow';
			break;
		case "Dostateczny":
			icons[i] = 'orange';
			break;
			case "Zły":
			icons[i] = 'red';
			break;
		case "Bardzo zły":
			icons[i] = 'purple';
		}
	}
	var data = [
		{
			'position': {lat: 50.081197, lng: 19.895358},
			'title': "Kraków, ul. Złoty Róg",
			'snippet': "Stan jakości powietrza: " + stStany[0],
			'icon': icons[0]
		},
		{
			'position': {lat: 50.057447, lng: 19.946008},
			'title': "Kraków, ul. Dietla",
			'snippet': "Stan jakości powietrza: " + stStany[1],
			'icon': icons[1]
		},
		{
			'position': {lat: 50.057678, lng: 19.926189},
			'title': "Kraków, Aleja Krasińskiego",
			'snippet': "Stan jakości powietrza: " + stStany[2],
			'icon': icons[2]
		},
		{
			'position': {lat: 50.069308, lng: 20.053492},
			'title': "Kraków, ul. Bulwarowa",
			'snippet': "Stan jakości powietrza: " + stStany[3],
			'icon': icons[3]
		},
		{
			'position': {lat: 50.100569, lng: 20.122561},
			'title': "Kraków, os. Wadów",
			'snippet': "Stan jakości powietrza: " + stStany[4],
			'icon': icons[4]
		},
		{
			'position': {lat: 50.099361, lng: 20.018317},
			'title': "Kraków, os. Piastów",
			'snippet': "Stan jakości powietrza: " + stStany[5],
			'icon': icons[5]
		},
		{
			'position': {lat: 50.010575, lng: 19.949189},
			'title': "Kraków, ul. Bujaka",
			'snippet': "Stan jakości powietrza: " + stStany[6],
			'icon': icons[6]
		},
		{
			'position': {lat: 50.0192 , lng: 20.016803},
			'title': "Kraków, ul. Telimeny",
			'snippet': "Stan jakości powietrza: " + stStany[7],
			'icon': icons[7]
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

	var onSuccess = function(position) {
		myLat = position.coords.latitude;
		myLng = position.coords.longitude;

		for (var i = 0; i < data.length; i++) {
			stla[i] = data[i];
		}
		
		stla.sort(function(a, b){
			return Math.sqrt(Math.pow(myLat - a.position.lat, 2) + Math.pow(myLng - a.position.lng, 2)) - Math.sqrt(Math.pow(myLat - b.position.lat, 2) + Math.pow(myLng - b.position.lng, 2))
		});
		
		map.addMarker({
			'position': {"lat": myLat, "lng": myLng},
			'title': 'Tu jestem',
			'snippet': stla[0].snippet,
			'icon': "http://maps.google.com/mapfiles/kml/pal3/icon56.png"
		});
	}

    // onError Callback receives a PositionError object
    //
    function onError(error) {
        alert('code: '    + error.code    + '\n' +
              'message: ' + error.message + '\n');
    }
    navigator.geolocation.getCurrentPosition(onSuccess, onError);
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