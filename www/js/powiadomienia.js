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
		var interwal = 1;
		return interwal;	
	}
}
function checkSlider(){
	var asd = document.getElementById('slider2').options[document.getElementById('slider2').selectedIndex].value
	return asd;
}

function checkStation(){
	var nazwaWybranejStacji = document.getElementById('stationChoice').options[document.getElementById('stationChoice').selectedIndex].value;
	var kodWybranejStacji = document.getElementById('stationChoice').options[document.getElementById('stationChoice').selectedIndex].innerHTML;
	localStorage.setItem("nazwaStacji", kodWybranejStacji);
	return nazwaWybranejStacji;
}


function ustawPowiadomienie(){
	var interwal = checkRadio();
	var pozwolenie = checkSlider();
	var stacja = checkStation();
	localStorage.setItem("stacja", stacja);
	localStorage.setItem("pozwolenie", pozwolenie);
	localStorage.setItem("interwal", interwal);
	if (localStorage.getItem("pozwolenie") == "on") {
		var timer = setInterval(function () {	
			wykonajPomiar()
		}, localStorage.getItem("interwal"));
	}
	else{
		powiadomieniaBrak()
	}
}

function wykonajPomiar(){
	$.getJSON( "http://api.gios.gov.pl/pjp-api/rest/aqindex/getIndex/"+localStorage.getItem("stacja"), function( stan3 ) {
		pomiarPowiadomienie = stan3.stIndexLevel.indexLevelName;
		powiadomienia(pomiarPowiadomienie);
	});
}




function powiadomienia(pomiarPowiadomienieData){
	cordova.plugins.notification.local.schedule({
	  id: 1,
	  title: localStorage.getItem("nazwaStacji"),
	  text: 'Stan powietrza: ' + pomiarPowiadomienieData,
	  autoClear: false,
	  at: new Date(new Date().getTime() + 5*1000)
	});
}

function powiadomieniaBrak(){
	cordova.plugins.notification.local.schedule({
	  id: 1,
	  title: 'Wyłączono powiadomienia'
	});
}