(function(){
	if (localStorage.getItem("pozwolenie") == "on") {
		powiadomienia()
	}
})();

function checkRadio() {
	if(document.getElementById('1godzina').checked) {
  		var interwal = "hour";
  		return interwal;
	}else if(document.getElementById('24godziny').checked) {
	  	var interwal = "day";
	  	return interwal;
	}else if(document.getElementById('1minuta').checked) {
		var interwal = "minute";
		return interwal;	
	}
}
function checkSlider(){
	var asd = document.getElementById('slider2').options[document.getElementById('slider2').selectedIndex].value
	return asd;
}

function checkStation(){
	var asd = document.getElementById('stationChoice').options[document.getElementById('stationChoice').selectedIndex].value;
	var qwerty = document.getElementById('stationChoice').options[document.getElementById('stationChoice').selectedIndex].innerHTML;
	localStorage.setItem("nazwaStacji", qwerty);
	return asd;
}


function ustawPowiadomienie(){
	interwal = checkRadio();
	pozwolenie = checkSlider();
	stacja= checkStation();
	localStorage.setItem("stacja", stacja);
	localStorage.setItem("pozwolenie", pozwolenie);
	localStorage.setItem("interwal", interwal);
	if (localStorage.getItem("pozwolenie") == "on") {
		powiadomienia()
	}
	else{
		powiadomieniaBrak()
	}
}

function wykonajPomiar(){
	$.getJSON( "http://api.gios.gov.pl/pjp-api/rest/aqindex/getIndex/"+localStorage.getItem("stacja"), function( stan3 ) {
				pomiarPowiadomienie = stan3.stIndexLevel.indexLevelName;
				localStorage.setItem("pomiar", pomiarPowiadomienie);			
			});
	return localStorage.getItem("pomiar");
}




function powiadomienia(){
	cordova.plugins.notification.local.schedule({
	  id: 1,
	  title: localStorage.getItem("nazwaStacji"),
	  text: 'Stan powietrza:' + wykonajPomiar(),
	  sound: null,
	  every: localStorage.getItem("interwal"), //, "hour", "week", "month", "year"
	  autoClear: false,
	  at: new Date(new Date().getTime() + 10*1000)
	});
}

function powiadomieniaBrak(){
	cordova.plugins.notification.local.schedule({
	  id: 1,
	  title: 'Wyłączono powiadomienia'
	});
}