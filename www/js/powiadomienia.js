(function(){
	if (localStorage.getItem("pozwolenie") == "on") {
		powiadomienia()
	}
})();

function checkRadio() {
	if(document.getElementById('1godzina').checked) {
  		var interwal = 60*60*1000;
  		return interwal;
	}else if(document.getElementById('24godziny').checked) {
	  	var interwal = 24*60*60*1000;
	  	return interwal;
	}else if(document.getElementById('1minuta').checked) {
		var interwal = 60*1000;
		return interwal;	
	}
}
function checkSlider(){
	var pozw = document.getElementById('slider2').options[document.getElementById('slider2').selectedIndex].value
	return pozw;
}

function checkStation(){
	var nazwaWybranejStacji = document.getElementById('stationChoice').options[document.getElementById('stationChoice').selectedIndex].value;
	var kodWybranejStacji = document.getElementById('stationChoice').options[document.getElementById('stationChoice').selectedIndex].innerHTML;
	localStorage.setItem("nazwaStacji", kodWybranejStacji);
	return nazwaWybranejStacji;
}

function checkState(){
	var wybranyStan = document.getElementById('stateChoice').options[document.getElementById('stateChoice').selectedIndex].value;
	localStorage.setItem("wybranyStan", wybranyStan);
	return wybranyStan;
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
		switch (checkState()) {
		case "Bardzo dobry":
			powiadomienia(pomiarPowiadomienie);
			console.log(pomiarPowiadomienie);
			break;
		case "Dobry":
			if (pomiarPowiadomienie === "Dobry" || pomiarPowiadomienie === "Umiarkowany" || pomiarPowiadomienie === "Dostateczny" || pomiarPowiadomienie === "Zły" || pomiarPowiadomienie === "Bardzo zły") {
				powiadomienia(pomiarPowiadomienie);
				console.log(pomiarPowiadomienie);
			}
			break;
		case "Umiarkowany":
			if (pomiarPowiadomienie === "Umiarkowany" || pomiarPowiadomienie === "Dostateczny" || pomiarPowiadomienie === "Zły" || pomiarPowiadomienie === "Bardzo zły") {
				powiadomienia(pomiarPowiadomienie);
				console.log(pomiarPowiadomienie);
			}
			break;
		case "Dostateczny":
			if (pomiarPowiadomienie === "Dostateczny" || pomiarPowiadomienie === "Zły" || pomiarPowiadomienie === "Bardzo zły") {
				powiadomienia(pomiarPowiadomienie);
				console.log(pomiarPowiadomienie);
			}
			break;
			case "Zły":
			if (pomiarPowiadomienie === "Zły" || pomiarPowiadomienie === "Bardzo zły") {
				powiadomienia(pomiarPowiadomienie);
				console.log(pomiarPowiadomienie);
			}
			break;
		case "Bardzo zły":
			if (pomiarPowiadomienie === "Bardzo zły") {
				powiadomienia(pomiarPowiadomienie);
				console.log(pomiarPowiadomienie);
			}
		}
	});
}

function powiadomienia(pomiarPowiadomienieData){
	cordova.plugins.notification.local.schedule({
	  id: 1,
	  title: localStorage.getItem("nazwaStacji"),
	  text: 'Stan powietrza: ' + pomiarPowiadomienieData,
	  //sound: null,
	  autoClear: false,
	  //at: new Date(new Date().getTime() + 5*1000)
	});
}

function powiadomieniaBrak(){
	cordova.plugins.notification.local.schedule({
	  id: 1,
	  title: 'Wyłączono powiadomienia'
	});
}