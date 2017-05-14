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
	var data = [
		{
			'position': {lat: 50.081197, lng: 19.895358},
			'title': "Kraków, ul. Złoty Róg",
			'snippet': "Stan jakości powietrza: " + document.getElementById('station1Stan').innerHTML
		},
		{
			'position': {lat: 50.057447, lng: 19.946008},
			'title': "Kraków, ul. Dietla",
			'snippet': "Stan jakości powietrza: " + document.getElementById('station2Stan').innerHTML
		},
		{
			'position': {lat: 50.057678, lng: 19.926189},
			'title': "Kraków, Aleja Krasińskiego",
			'snippet': "Stan jakości powietrza: " + document.getElementById('station3Stan').innerHTML
		},
		{
			'position': {lat: 50.069308, lng: 20.053492},
			'title': "Kraków, ul. Bulwarowa",
			'snippet': "Stan jakości powietrza: " + document.getElementById('station4Stan').innerHTML
		},
		{
			'position': {lat: 50.100569, lng: 20.122561},
			'title': "Kraków, os. Wadów",
			'snippet': "Stan jakości powietrza: " + document.getElementById('station5Stan').innerHTML
		},
		{
			'position': {lat: 50.099361, lng: 20.018317},
			'title': "Kraków, os. Piastów",
			'snippet': "Stan jakości powietrza: " + document.getElementById('station6Stan').innerHTML
		},
		{
			'position': {lat: 50.010575, lng: 19.949189},
			'title': "Kraków, ul. Bujaka",
			'snippet': "Stan jakości powietrza: " + document.getElementById('station7Stan').innerHTML
		},
		{
			'position': {lat: 50.0192 , lng: 20.016803},
			'title': "Kraków, ul. Telimeny",
			'snippet': "Stan jakości powietrza: " + document.getElementById('station8Stan').innerHTML
		}
	];
	
	function addMarkers(data, callback) {
		for (var i = 0; i < data.length; i++) {
			map.addMarker(data[i]);
		}
	}
		
	addMarkers(data, function(markers) {
		markers[markers.length - 1].showInfoWindow();
	});
	
	var onSuccess = function(position) {
		/*alert('Latitude: '          + position.coords.latitude          + '\n' +
					'Longitude: '         + position.coords.longitude         + '\n' +
					'Altitude: '          + position.coords.altitude          + '\n' +
					'Accuracy: '          + position.coords.accuracy          + '\n' +
					'Altitude Accuracy: ' + position.coords.altitudeAccuracy  + '\n' +
					'Heading: '           + position.coords.heading           + '\n' +
					'Speed: '             + position.coords.speed             + '\n' +
					'Timestamp: '         + position.timestamp                + '\n');
		*/
		
		myLat = position.coords.latitude;
		myLng = position.coords.longitude;
		
				
		map.addMarker({
			'position': {"lat": myLat, "lng": myLng},
			'title': 'Tu jesteś',
			'icon': "http://www.google.com/intl/en_us/mapfiles/ms/icons/blue-dot.png",
		});
		
		for (var i = 0; i < data.length; i++) {
			stla[i] = data[i];
		}
		
		stla.sort(function(a, b){
			return Math.sqrt(Math.pow(myLat - a.position.lat, 2) + Math.pow(myLng - a.position.lng, 2)) - Math.sqrt(Math.pow(myLat - b.position.lat, 2) + Math.pow(myLng - b.position.lng, 2))
		});
		document.getElementById('test1').innerHTML = "Najbliższa stacja: " + stla[0].title;
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