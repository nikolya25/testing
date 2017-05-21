
var normaPM10 = 50;
var normaNO2 = 200;
var normaCO = 10000;
var normaBenzen = 5;
var normaPM25 = 25;
var normaSO2 = 125;
var normaO3 = 120;
var station1NameH, station2NameH, station3NameH, station4NameH, station5NameH, station6NameH, station7NameH, station8NameH;
var station1StanH, station2StanH, station3StanH, station4StanH, station5StanH, station6StanH, station7StanH, station8StanH;
$.ajax({
	method: "GET",
	url: "http://api.gios.gov.pl/pjp-api/rest/station/findAll",
	dataType: "json"
}).done(function (data) {

    for (var x=0; x<170; x++) {
    	//Kraków, ul. Złoty Róg
    	if (data[x].id == 10123) {
	    	document.getElementById('station1Name').innerHTML = data[x].stationName;
	    	document.getElementById('optName1').innerHTML = data[x].stationName;
	    	station1NameH = data[x].stationName;
    		document.getElementById('station1Adress').innerHTML = data[x].addressStreet;
			$.getJSON( "http://api.gios.gov.pl/pjp-api/rest/aqindex/getIndex/"+data[x].id, function( stan1 ) {
				station1StanH = stan1.stIndexLevel.indexLevelName;
				document.getElementById('station1Stan').innerHTML = station1StanH;
			});
		}

		//Kraków, ul. Dietla
		if (data[x].id == 10121) {
	    	document.getElementById('station2Name').innerHTML = data[x].stationName;
	    	document.getElementById('optName2').innerHTML = data[x].stationName;
	    	station2NameH = data[x].stationName;
    		document.getElementById('station2Adress').innerHTML = data[x].addressStreet;
			$.getJSON( "http://api.gios.gov.pl/pjp-api/rest/aqindex/getIndex/"+data[x].id, function( stan2 ) {
				station2StanH = stan2.stIndexLevel.indexLevelName;
				document.getElementById('station2Stan').innerHTML = station2StanH;			
			});
		}
		//Kraków, Aleja Krasińskiego
		if (data[x].id == 400) {
	    	document.getElementById('station3Name').innerHTML = data[x].stationName;
	    	document.getElementById('optName3').innerHTML = data[x].stationName;
	    	station3NameH = data[x].stationName;
    		document.getElementById('station3Adress').innerHTML = data[x].addressStreet;
			$.getJSON( "http://api.gios.gov.pl/pjp-api/rest/aqindex/getIndex/"+data[x].id, function( stan3 ) {
				station3StanH = stan3.stIndexLevel.indexLevelName;
				document.getElementById('station3Stan').innerHTML = station3StanH;			
			});
		}
		//Kraków, ul. Bulwarowa
		if (data[x].id == 402) {
	    	document.getElementById('station4Name').innerHTML = data[x].stationName;
	    	document.getElementById('optName4').innerHTML = data[x].stationName;
	    	station4NameH = data[x].stationName;
    		document.getElementById('station4Adress').innerHTML = data[x].addressStreet;
			$.getJSON( "http://api.gios.gov.pl/pjp-api/rest/aqindex/getIndex/"+data[x].id, function( stan4 ) {
				station4StanH = stan4.stIndexLevel.indexLevelName;
				document.getElementById('station4Stan').innerHTML = station4StanH;			
			});
		}
		//Kraków, os. Wadów
		if (data[x].id == 10447) {
	    	document.getElementById('station5Name').innerHTML = data[x].stationName;
	    	document.getElementById('optName5').innerHTML = data[x].stationName;
	    	station5NameH = data[x].stationName;
    		document.getElementById('station5Adress').innerHTML = data[x].addressStreet;
			$.getJSON( "http://api.gios.gov.pl/pjp-api/rest/aqindex/getIndex/"+data[x].id, function( stan5 ) {
				station5StanH = stan5.stIndexLevel.indexLevelName;
				document.getElementById('station5Stan').innerHTML = station5StanH;			
			});
		}
		//Kraków, os. Piastów
		if (data[x].id == 10139) {
	    	document.getElementById('station6Name').innerHTML = data[x].stationName;
	    	document.getElementById('optName6').innerHTML = data[x].stationName;
	    	station6NameH = data[x].stationName;
    		document.getElementById('station6Adress').innerHTML = data[x].addressStreet;
			$.getJSON( "http://api.gios.gov.pl/pjp-api/rest/aqindex/getIndex/"+data[x].id, function( stan6 ) {
				station6StanH = stan6.stIndexLevel.indexLevelName;
				document.getElementById('station6Stan').innerHTML = station6StanH;			
			});
		}
		//Kraków, ul. Bujaka
		if (data[x].id == 401) {
	    	document.getElementById('station7Name').innerHTML = data[x].stationName;
	    	document.getElementById('optName7').innerHTML = data[x].stationName;
	    	station7NameH = data[x].stationName;
    		document.getElementById('station7Adress').innerHTML = data[x].addressStreet;
			$.getJSON( "http://api.gios.gov.pl/pjp-api/rest/aqindex/getIndex/"+data[x].id, function( stan7 ) {
				station7StanH = stan7.stIndexLevel.indexLevelName;
				document.getElementById('station7Stan').innerHTML = station7StanH;			
			});
		}
		//Kraków, ul. Telimeny
		if (data[x].id == 10435) {
	    	document.getElementById('station8Name').innerHTML = data[x].stationName;
	    	document.getElementById('optName8').innerHTML = data[x].stationName;
	    	station8NameH = data[x].stationName;
    		document.getElementById('station8Adress').innerHTML = data[x].addressStreet;
			$.getJSON( "http://api.gios.gov.pl/pjp-api/rest/aqindex/getIndex/"+data[x].id, function( stan8 ) {
				station8StanH = stan8.stIndexLevel.indexLevelName;
				document.getElementById('station8Stan').innerHTML = station8StanH;			
			});
		}
	}

});

// ładowanie danych ze stacji 1 Kraków, ul. Złoty Róg

function station1dane(){
	$.getJSON( "http://api.gios.gov.pl/pjp-api/rest/data/getData/16786", function( dane1 ) {
			for (var x = 0; x < 24; x++) {
			
			    if (dane1.values[x].value != null) {
			    	document.getElementById('stationPM10').innerHTML = (dane1.values[x].value).toFixed(2);
			    	document.getElementById('stationPM10Date').innerHTML = dane1.values[x].date;
			    	normPM10Now = ((dane1.values[x].value / normaPM10)*100).toFixed(2);
			    	document.getElementById('stationPM10Norm').innerHTML = normPM10Now;
					localStorage.setItem("normPM10Now", normPM10Now);
					document.getElementById('messageTxt').value = "Stan powietrza na stacji " + station1NameH + " jest " + station1StanH + ". Stężenie pyłu PM10 wynosi " + localStorage.getItem("normPM10Now"); + "%";
					break;
			    }
			}
			
	});

	$.getJSON( "http://api.gios.gov.pl/pjp-api/rest/aqindex/getIndex/10123", function( stan1PM10 ) {
			  document.getElementById('stationPM10Stan').innerHTML = stan1PM10.pm10IndexLevel.indexLevelName;
			})
	document.getElementById('stationNameH').innerHTML = station1NameH;
	document.getElementById('stationNameHP').innerHTML = station1NameH;
}

// ładowanie danych ze stacji 2 Kraków, ul. Dietla

function station2dane(){
	$.getJSON( "http://api.gios.gov.pl/pjp-api/rest/data/getData/16377", function( dane1 ) {
			for (var x = 0; x < 24; x++) {
			
			    if (dane1.values[x].value != null) {
			    	document.getElementById('stationPM10').innerHTML = (dane1.values[x].value).toFixed(2);
			    	document.getElementById('stationPM10Date').innerHTML = dane1.values[x].date;
			    	normPM10Now = ((dane1.values[x].value / normaPM10)*100).toFixed(2);
			    	document.getElementById('stationPM10Norm').innerHTML = normPM10Now;
			    	localStorage.setItem("normPM10Now", normPM10Now);
					document.getElementById('messageTxt').value = "Stan powietrza na stacji " + station2NameH + " jest " + station2StanH + ". Stężenie pyłu PM10 wynosi " + localStorage.getItem("normPM10Now") + "%";
			    	break;
			    }
			}
			
	});
	$.getJSON( "http://api.gios.gov.pl/pjp-api/rest/data/getData/16516", function( dane1 ) {
			for (var x = 0; x < 24; x++) {
			
			    if (dane1.values[x].value != null) {
			    	document.getElementById('stationNO2').innerHTML = (dane1.values[x].value).toFixed(2);
			    	document.getElementById('stationNO2Date').innerHTML = dane1.values[x].date;
			    	norm2NO2Now = ((dane1.values[x].value / normaNO2)*100).toFixed(2);
			    	document.getElementById('stationNO2Norm').innerHTML = norm2NO2Now
			    	break;
			    }
			}
			
	});
	$.getJSON( "http://api.gios.gov.pl/pjp-api/rest/aqindex/getIndex/10121", function( stan ) {
			  document.getElementById('stationPM10Stan').innerHTML = stan.pm10IndexLevel.indexLevelName;
			  document.getElementById('stationNO2Stan').innerHTML = stan.no2IndexLevel.indexLevelName;
			})
	document.getElementById('stationNameH').innerHTML = station2NameH;
	document.getElementById('stationNameHP').innerHTML = station2NameH;
}

// ładowanie danych ze stacji 3 Kraków, Aleja Krasińskiego

function station3dane(){
	//pm10
	$.getJSON( "http://api.gios.gov.pl/pjp-api/rest/data/getData/2750", function( dane1 ) {
			for (var x = 0; x < 24; x++) {
			
			    if (dane1.values[x].value != null) {
			    	document.getElementById('stationPM10').innerHTML = (dane1.values[x].value).toFixed(2);
			    	document.getElementById('stationPM10Date').innerHTML = dane1.values[x].date;
			    	normPM10Now = ((dane1.values[x].value / normaPM10)*100).toFixed(2);
			    	document.getElementById('stationPM10Norm').innerHTML = normPM10Now;
			    	localStorage.setItem("normPM10Now", normPM10Now);
					document.getElementById('messageTxt').value = "Stan powietrza na stacji " + station3NameH + " jest " + station3StanH + ". Stężenie pyłu PM10 wynosi " + localStorage.getItem("normPM10Now") + "%";
			    	break;
			    }
			}
			
	});
	//NO2
	$.getJSON( "http://api.gios.gov.pl/pjp-api/rest/data/getData/2747", function( dane1 ) {
			for (var x = 0; x < 24; x++) {
			
			    if (dane1.values[x].value != null) {
			    	document.getElementById('stationNO2').innerHTML = (dane1.values[x].value).toFixed(2);
			    	document.getElementById('stationNO2Date').innerHTML = dane1.values[x].date;
			    	norm3NO2Now = ((dane1.values[x].value / normaNO2)*100).toFixed(2);
			    	document.getElementById('stationNO2Norm').innerHTML = norm3NO2Now;
			    	break;
			    }
			}
			
	});
	//CO
	$.getJSON( "http://api.gios.gov.pl/pjp-api/rest/data/getData/2745", function( dane1 ) {
			for (var x = 0; x < 24; x++) {
			
			    if (dane1.values[x].value != null) {
			    	document.getElementById('stationCO').innerHTML = (dane1.values[x].value).toFixed(2);
			    	document.getElementById('stationCODate').innerHTML = dane1.values[x].date;
			    	normCONow = ((dane1.values[x].value / normaCO)*100).toFixed(2);
			    	document.getElementById('stationCONorm').innerHTML = normCONow;
			    	break;
			    }
			}
			
	});
	//Benzen
	$.getJSON( "http://api.gios.gov.pl/pjp-api/rest/data/getData/16500", function( dane1 ) {
			for (var x = 0; x < 24; x++) {
			
			    if (dane1.values[x].value != null) {
			    	document.getElementById('stationBenzen').innerHTML = (dane1.values[x].value).toFixed(2);
			    	document.getElementById('stationBenzenDate').innerHTML = dane1.values[x].date;
			    	normBenzenNow = ((dane1.values[x].value / normaBenzen)*100).toFixed(2);
			    	document.getElementById('stationBenzenNorm').innerHTML = normBenzenNow;
			    	break;
			    }
			}
			
	});
	//PM25
	$.getJSON( "http://api.gios.gov.pl/pjp-api/rest/data/getData/2752", function( dane1 ) {
			for (var x = 0; x < 24; x++) {
			
			    if (dane1.values[x].value != null) {
			    	document.getElementById('stationPM25').innerHTML = (dane1.values[x].value).toFixed(2);
			    	document.getElementById('stationPM25Date').innerHTML = dane1.values[x].date;
			    	normPM25Now = ((dane1.values[x].value / normaPM25)*100).toFixed(2);
			    	document.getElementById('stationPM25Norm').innerHTML = normPM25Now;
			    	break;
			    }
			}
			
	});
	$.getJSON( "http://api.gios.gov.pl/pjp-api/rest/aqindex/getIndex/400", function( stan ) {
			  document.getElementById('stationPM10Stan').innerHTML = stan.pm10IndexLevel.indexLevelName;
			  document.getElementById('stationNO2Stan').innerHTML = stan.no2IndexLevel.indexLevelName;
			  document.getElementById('stationCOStan').innerHTML = stan.coIndexLevel.indexLevelName;
			  document.getElementById('stationBenzenStan').innerHTML = stan.c6h6IndexLevel.indexLevelName;
			  document.getElementById('stationPM25Stan').innerHTML = stan.pm25IndexLevel.indexLevelName;

			})
	document.getElementById('stationNameH').innerHTML = station3NameH;
	document.getElementById('stationNameHP').innerHTML = station3NameH;
}

// ładowanie danych ze stacji 4 Kraków, ul. Bulwarowa

function station4dane(){
	//pm10
	$.getJSON( "http://api.gios.gov.pl/pjp-api/rest/data/getData/2792", function( dane1 ) {
			for (var x = 0; x < 24; x++) {
			
			    if (dane1.values[x].value != null) {
			    	document.getElementById('stationPM10').innerHTML = (dane1.values[x].value).toFixed(2);
			    	document.getElementById('stationPM10Date').innerHTML = dane1.values[x].date;
			    	normPM10Now = ((dane1.values[x].value / normaPM10)*100).toFixed(2);
			    	document.getElementById('stationPM10Norm').innerHTML = normPM10Now;
			    	localStorage.setItem("normPM10Now", normPM10Now);
					document.getElementById('messageTxt').value = "Stan powietrza na stacji " + station4NameH + " jest " + station4StanH + ". Stężenie pyłu PM10 wynosi " + localStorage.getItem("normPM10Now") + "%";	
			    	break;
			    }
			}
			
	});
	//NO2
	$.getJSON( "http://api.gios.gov.pl/pjp-api/rest/data/getData/2788", function( dane1 ) {
			for (var x = 0; x < 24; x++) {
			
			    if (dane1.values[x].value != null) {
			    	document.getElementById('stationNO2').innerHTML = (dane1.values[x].value).toFixed(2);
			    	document.getElementById('stationNO2Date').innerHTML = dane1.values[x].date;
			    	norm3NO2Now = ((dane1.values[x].value / normaNO2)*100).toFixed(2);
			    	document.getElementById('stationNO2Norm').innerHTML = norm3NO2Now;
			    	break;
			    }
			}
			
	});
	//CO
	$.getJSON( "http://api.gios.gov.pl/pjp-api/rest/data/getData/2783", function( dane1 ) {
			for (var x = 0; x < 24; x++) {
			
			    if (dane1.values[x].value != null) {
			    	document.getElementById('stationCO').innerHTML = (dane1.values[x].value).toFixed(2);
			    	document.getElementById('stationCODate').innerHTML = dane1.values[x].date;
			    	normCONow = ((dane1.values[x].value / normaCO)*100).toFixed(2);
			    	document.getElementById('stationCONorm').innerHTML = normCONow;
			    	break;
			    }
			}
			
	});
	//Benzen
	$.getJSON( "http://api.gios.gov.pl/pjp-api/rest/data/getData/2779", function( dane1 ) {
			for (var x = 0; x < 24; x++) {
			
			    if (dane1.values[x].value != null) {
			    	document.getElementById('stationBenzen').innerHTML = (dane1.values[x].value).toFixed(2);
			    	document.getElementById('stationBenzenDate').innerHTML = dane1.values[x].date;
			    	normBenzenNow = ((dane1.values[x].value / normaBenzen)*100).toFixed(2);
			    	document.getElementById('stationBenzenNorm').innerHTML = normBenzenNow;
			    	break;
			    }
			}
			
	});
	//PM25
	$.getJSON( "http://api.gios.gov.pl/pjp-api/rest/data/getData/2794", function( dane1 ) {
			for (var x = 0; x < 24; x++) {
			
			    if (dane1.values[x].value != null) {
			    	document.getElementById('stationPM25').innerHTML = (dane1.values[x].value).toFixed(2);
			    	document.getElementById('stationPM25Date').innerHTML = dane1.values[x].date;
			    	normPM25Now = ((dane1.values[x].value / normaPM25)*100).toFixed(2);
			    	document.getElementById('stationPM25Norm').innerHTML = normPM25Now;
			    	break;
			    }
			}
			
	});
	//SO2
	$.getJSON( "http://api.gios.gov.pl/pjp-api/rest/data/getData/2797", function( dane1 ) {
			for (var x = 0; x < 24; x++) {
			
			    if (dane1.values[x].value != null) {
			    	document.getElementById('stationSO2').innerHTML = (dane1.values[x].value).toFixed(2);
			    	document.getElementById('stationSO2Date').innerHTML = dane1.values[x].date;
			    	normSO2Now = ((dane1.values[x].value / normaSO2)*100).toFixed(2);
			    	document.getElementById('stationSO2Norm').innerHTML = normSO2Now;
			    	break;
			    }
			}
			
	});
	$.getJSON( "http://api.gios.gov.pl/pjp-api/rest/aqindex/getIndex/402", function( stan ) {
			  document.getElementById('stationPM10Stan').innerHTML = stan.pm10IndexLevel.indexLevelName;
			  document.getElementById('stationNO2Stan').innerHTML = stan.no2IndexLevel.indexLevelName;
			  document.getElementById('stationCOStan').innerHTML = stan.coIndexLevel.indexLevelName;
			  document.getElementById('stationBenzenStan').innerHTML = stan.c6h6IndexLevel.indexLevelName;
			  document.getElementById('stationPM25Stan').innerHTML = stan.pm25IndexLevel.indexLevelName;
			  document.getElementById('stationSO2Stan').innerHTML = stan.so2IndexLevel.indexLevelName;

			})
	document.getElementById('stationNameH').innerHTML = station4NameH;
	document.getElementById('stationNameHP').innerHTML = station4NameH;
}

// ładowanie danych ze stacji 5 Kraków, os. Wadów

function station5dane(){
	$.getJSON( "http://api.gios.gov.pl/pjp-api/rest/data/getData/17309", function( dane1 ) {
			for (var x = 0; x < 24; x++) {
			
			    if (dane1.values[x].value != null) {
			    	document.getElementById('stationPM10').innerHTML = (dane1.values[x].value).toFixed(2);
			    	document.getElementById('stationPM10Date').innerHTML = dane1.values[x].date;
			    	normPM10Now = ((dane1.values[x].value / normaPM10)*100).toFixed(2);
			    	document.getElementById('stationPM10Norm').innerHTML = normPM10Now;
			    	localStorage.setItem("normPM10Now", normPM10Now);
					document.getElementById('messageTxt').value = "Stan powietrza na stacji " + station5NameH + " jest " + station5StanH + ". Stężenie pyłu PM10 wynosi " + localStorage.getItem("normPM10Now") + "%";
			    	break;
			    }
			}
			
	});
	$.getJSON( "http://api.gios.gov.pl/pjp-api/rest/aqindex/getIndex/10447", function( stan1PM10 ) {
			  document.getElementById('stationPM10Stan').innerHTML = stan1PM10.pm10IndexLevel.indexLevelName;
			})
	document.getElementById('stationNameH').innerHTML = station5NameH;
	document.getElementById('stationNameHP').innerHTML = station5NameH;
}


// ładowanie danych ze stacji 6 Kraków, os. Piastów

function station6dane(){
	//pm10
	$.getJSON( "http://api.gios.gov.pl/pjp-api/rest/data/getData/16784", function( dane1 ) {
			for (var x = 0; x < 24; x++) {
			
			    if (dane1.values[x].value != null) {
			    	document.getElementById('stationPM10').innerHTML = (dane1.values[x].value).toFixed(2);
			    	document.getElementById('stationPM10Date').innerHTML = dane1.values[x].date;
			    	normPM10Now = ((dane1.values[x].value / normaPM10)*100).toFixed(2);
			    	document.getElementById('stationPM10Norm').innerHTML = normPM10Now;
			    	localStorage.setItem("normPM10Now", normPM10Now);
					document.getElementById('messageTxt').value = "Stan powietrza na stacji " + station6NameH + " jest " + station6StanH + ". Stężenie pyłu PM10 wynosi " + localStorage.getItem("normPM10Now") + "%";	
			    	break;
			    }
			}
			
	});
	$.getJSON( "http://api.gios.gov.pl/pjp-api/rest/aqindex/getIndex/10139", function( stan ) {
			  document.getElementById('stationPM10Stan').innerHTML = stan.pm10IndexLevel.indexLevelName;

			})
	document.getElementById('stationNameH').innerHTML = station6NameH;
	document.getElementById('stationNameHP').innerHTML = station6NameH;
}

// ładowanie danych ze stacji 7 Kraków, ul. Bujaka

function station7dane(){
	//pm10
	$.getJSON( "http://api.gios.gov.pl/pjp-api/rest/data/getData/2770", function( dane1 ) {
			for (var x = 0; x < 24; x++) {
			
			    if (dane1.values[x].value != null) {
			    	document.getElementById('stationPM10').innerHTML = (dane1.values[x].value).toFixed(2);
			    	document.getElementById('stationPM10Date').innerHTML = dane1.values[x].date;
			    	normPM10Now = ((dane1.values[x].value / normaPM10)*100).toFixed(2);
			    	document.getElementById('stationPM10Norm').innerHTML = normPM10Now;
			    	localStorage.setItem("normPM10Now", normPM10Now);
					document.getElementById('messageTxt').value = "Stan powietrza na stacji " + station7NameH + " jest " + station7StanH + ". Stężenie pyłu PM10 wynosi " + localStorage.getItem("normPM10Now") + "%";	
			    	break;
			    }
			}
			
	});
	//NO2
	$.getJSON( "http://api.gios.gov.pl/pjp-api/rest/data/getData/2766", function( dane1 ) {
			for (var x = 0; x < 24; x++) {
			
			    if (dane1.values[x].value != null) {
			    	document.getElementById('stationNO2').innerHTML = (dane1.values[x].value).toFixed(2);
			    	document.getElementById('stationNO2Date').innerHTML = dane1.values[x].date;
			    	norm3NO2Now = ((dane1.values[x].value / normaNO2)*100).toFixed(2);
			    	document.getElementById('stationNO2Norm').innerHTML = norm3NO2Now;
			    	break;
			    }
			}
			
	});
	//O3
	$.getJSON( "http://api.gios.gov.pl/pjp-api/rest/data/getData/2768", function( dane1 ) {
			for (var x = 0; x < 24; x++) {
			
			    if (dane1.values[x].value != null) {
			    	document.getElementById('stationO3').innerHTML = (dane1.values[x].value).toFixed(2);
			    	document.getElementById('stationO3Date').innerHTML = dane1.values[x].date;
			    	normO3Now = ((dane1.values[x].value / normaO3)*100).toFixed(2);
			    	document.getElementById('stationO3Norm').innerHTML = normO3Now;
			    	break;
			    }
			}
			
	});
	//PM25
	$.getJSON( "http://api.gios.gov.pl/pjp-api/rest/data/getData/2772", function( dane1 ) {
			for (var x = 0; x < 24; x++) {
			
			    if (dane1.values[x].value != null) {
			    	document.getElementById('stationPM25').innerHTML = (dane1.values[x].value).toFixed(2);
			    	document.getElementById('stationPM25Date').innerHTML = dane1.values[x].date;
			    	normPM25Now = ((dane1.values[x].value / normaPM25)*100).toFixed(2);
			    	document.getElementById('stationPM25Norm').innerHTML = normPM25Now;
			    	break;
			    }
			}
			
	});
	//SO2
	$.getJSON( "http://api.gios.gov.pl/pjp-api/rest/data/getData/2774", function( dane1 ) {
			for (var x = 0; x < 24; x++) {
			
			    if (dane1.values[x].value != null) {
			    	document.getElementById('stationSO2').innerHTML = (dane1.values[x].value).toFixed(2);
			    	document.getElementById('stationSO2Date').innerHTML = dane1.values[x].date;
			    	normSO2Now = ((dane1.values[x].value / normaSO2)*100).toFixed(2);
			    	document.getElementById('stationSO2Norm').innerHTML = normSO2Now;
			    	break;
			    }
			}
			
	});
	$.getJSON( "http://api.gios.gov.pl/pjp-api/rest/aqindex/getIndex/401", function( stan ) {
			  document.getElementById('stationPM10Stan').innerHTML = stan.pm10IndexLevel.indexLevelName;
			  document.getElementById('stationNO2Stan').innerHTML = stan.no2IndexLevel.indexLevelName;
			  document.getElementById('stationO3Stan').innerHTML = stan.coIndexLevel.indexLevelName;
			  document.getElementById('stationPM25Stan').innerHTML = stan.pm25IndexLevel.indexLevelName;
			  document.getElementById('stationSO2Stan').innerHTML = stan.so2IndexLevel.indexLevelName;

			})
	document.getElementById('stationNameH').innerHTML = station7NameH;
	document.getElementById('stationNameHP').innerHTML = station7NameH;
}

// ładowanie danych ze stacji 8 Kraków, ul. Telimeny

function station8dane(){
	$.getJSON( "http://api.gios.gov.pl/pjp-api/rest/data/getData/17243", function( dane1 ) {
			for (var x = 0; x < 24; x++) {
			
			    if (dane1.values[x].value != null) {
			    	document.getElementById('stationPM10').innerHTML = (dane1.values[x].value).toFixed(2);
			    	document.getElementById('stationPM10Date').innerHTML = dane1.values[x].date;
			    	normPM10Now = ((dane1.values[x].value / normaPM10)*100).toFixed(2);
			    	document.getElementById('stationPM10Norm').innerHTML = normPM10Now;
			    	localStorage.setItem("normPM10Now", normPM10Now);
					document.getElementById('messageTxt').value = "Stan powietrza na stacji " + station8NameH + " jest " + station8StanH  + ". Stężenie pyłu PM10 wynosi " + localStorage.getItem("normPM10Now") + "%";	
			    	break;
			    }
			}
			
	});
	$.getJSON( "http://api.gios.gov.pl/pjp-api/rest/aqindex/getIndex/10435", function( stan1PM10 ) {
			  document.getElementById('stationPM10Stan').innerHTML = stan1PM10.pm10IndexLevel.indexLevelName;
			})
	document.getElementById('stationNameH').innerHTML = station8NameH;
	document.getElementById('stationNameHP').innerHTML = station8NameH;
}

// funkcja do sprawdzania czy jest darmowe mpk

function mpkFree(){
	var currentDate = new Date();
	var wczoraj23;
	function leadingZero(i) {
       	return (i < 10)? '0' + i : i;
    }
	if (currentDate.getDate() === 1) {
    	if (currentDate.getMonth() === 4 || currentDate.getMonth() === 6 || currentDate.getMonth() === 9 || currentDate.getMonth() === 11) {
			wczoraj23 = currentDate.getFullYear() + "-" + leadingZero(currentDate.getMonth()) + "-"  + leadingZero(currentDate.getDate() + 29) + " " + "11:00:00";
		} else if (currentDate.getMonth() === 1 || currentDate.getMonth() === 3 || currentDate.getMonth() === 5 || currentDate.getMonth() === 7 || currentDate.getMonth() === 8  || currentDate.getMonth() === 10) {
		    wczoraj23 = currentDate.getFullYear() + "-" + leadingZero(currentDate.getMonth()) + "-"  + leadingZero(currentDate.getDate() + 30) + " " + "11:00:00";
		} else if (currentDate.getMonth() === 0) {
		    wczoraj23 = currentDate.getFullYear() - 1 + "-" + leadingZero(currentDate.getMonth() + 12) + "-"  + leadingZero(currentDate.getDate() + 30) + " " + "11:00:00";
		} else if (currentDate.getMonth() === 2 && currentDate.getFullYear() % 4 === 0) {
		    wczoraj23 = currentDate.getFullYear() + "-" + leadingZero(currentDate.getMonth()) + "-"  + leadingZero(currentDate.getDate() + 28) + " " + "11:00:00";
		} else if (currentDate.getMonth() === 2 && currentDate.getFullYear() % 4 !== 0) {
		    wczoraj23 = currentDate.getFullYear() + "-" + leadingZero(currentDate.getMonth()) + "-"  + leadingZero(currentDate.getDate() + 27) + " " + "11:00:00";
		}
	} else {
		wczoraj23 = currentDate.getFullYear() + "-" + leadingZero(currentDate.getMonth() + 1) + "-"  + leadingZero(currentDate.getDate() - 1) + " " + "11:00:00";
	}
	var wczoraj23String = wczoraj23.toString();
	var srednia2Sum = 0;
	var srednia1Sum = 0;
	var idTab = ['16786','16377','2750','2792','17309','16784','2770','17243'];

	for (var z = 0; z < 8; z++) {
		$.getJSON( "http://api.gios.gov.pl/pjp-api/rest/data/getData/"+idTab[z], function( dane1 ) {
			var suma1 = 0;
			var suma2 = 0;
			var srednia1 = 0;
			var srednia2 = 0;
			for (var x = 0; x < 30; x++) {
				if (dane1.values[x].date.toString() == wczoraj23String) {
					for (var y = 0; y < 12; y++) {
						suma1 = suma1 + dane1.values[x + y].value;
					}
					srednia1 = suma1 / 12;
					for (var j = 7; j < 24; j++) {
						suma2 = suma2 + dane1.values[x + j].value;
					}
					srednia2 = suma2 / 16;
				}	
			}
			srForMPK(srednia1, srednia2);
		});
	}
	
	function srForMPK (sr1, sr2) {
		srednia1Sum += sr1;
		srednia2Sum += sr2;
		var srednia1Final = (srednia1Sum / 8).toFixed(2);
		var srednia2Final = (srednia2Sum / 8).toFixed(2);
		if (srednia1Final >= 150 || srednia2Final >= 150) {
			document.getElementById('wsms').innerHTML = "Z powodu wysokiego zanieczyszczenia powietrza jakie miało miejsce w dniu wczorajszym, w dniu dzisiejszym obowiązuje darmowa komunikacja miejska na terenie całego miasta Krakowa za okazaniem dowodu rejestracyjnego";
		} else {
			document.getElementById('wsms').innerHTML = "Brak podstaw do ogłoszenia darmowej komunikacji miejskiej";
		}
		document.getElementById('srednieSa').innerHTML = "Na podstawie danych pomiarowych z dnia wczorajszego";
		document.getElementById('messageTxt').value = document.getElementById('wsms').innerHTML;
	}
}