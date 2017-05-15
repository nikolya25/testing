var smsapp = {
    sendSms: function() {
        var number = document.getElementById('numberTxt').value;
        var message;
		// nie widzę sensu w tym sms'ie (dla tego zostawiłem tylko część), ale działa, 
		if (document.getElementById('messageTxt').value === "") {
			message = /*document.getElementById('pzPM10').innerHTML + 
			": Wartość pomiaru: " + document.getElementById('stationPM10').innerHTML + 
			", Data pomiaru: " + document.getElementById('stationPM10Date').innerHTML +
			", Norma: " + document.getElementById('stationPM10Norm').innerHTML +*/
			",  Stan powietrza: " + document.getElementById('stationPM10Stan').innerHTML +
			/*", " + document.getElementById('daNO2').innerHTML + 
			": Wartość pomiaru: " + document.getElementById('stationNO2').innerHTML + 
			", Data pomiaru: " + document.getElementById('stationNO2Date').innerHTML +
			", Norma: " + document.getElementById('stationNO2Norm').innerHTML +
			", Stan powietrza: " + document.getElementById('stationNO2Stan').innerHTML +
			", " + document.getElementById('twCO').innerHTML + 
			": Wartość pomiaru: " + document.getElementById('stationCO').innerHTML + 
			", Data pomiaru: " + document.getElementById('stationCODate').innerHTML +
			", Norma: " + document.getElementById('stationCONorm').innerHTML +
			", Stan powietrza: " + document.getElementById('stationCOStan').innerHTML +
			", " + document.getElementById('bC6H6').innerHTML + 
			": Wartość pomiaru: " + document.getElementById('stationBenzen').innerHTML + 
			", Data pomiaru: " + document.getElementById('stationBenzenDate').innerHTML +
			", Norma: " + document.getElementById('stationBenzenNorm').innerHTML +
			", Stan powietrza: " + document.getElementById('stationBenzenStan').innerHTML +
			", " + document.getElementById('pzPM25').innerHTML + 
			": Wartość pomiaru: " + document.getElementById('stationPM25').innerHTML + 
			", Data pomiaru: " + document.getElementById('stationPM25Date').innerHTML +
			", Norma: " + document.getElementById('stationPM25Norm').innerHTML +
			", Stan powietrza: " + document.getElementById('stationPM25Stan').innerHTML +
			", " + document.getElementById('dsSO2').innerHTML + 
			": Wartość pomiaru: " + document.getElementById('stationSO2').innerHTML + 
			", Data pomiaru: " + document.getElementById('stationSO2Date').innerHTML +
			", Norma: " + document.getElementById('stationSO2Norm').innerHTML +
			", Stan powietrza: " + document.getElementById('stationSO2Stan').innerHTML +
			", " + document.getElementById('oO3').innerHTML + 
			": Wartość pomiaru: " + document.getElementById('stationO3').innerHTML + 
			", Data pomiaru: " + document.getElementById('stationO3Date').innerHTML +
			", Norma: " + document.getElementById('stationO3Norm').innerHTML +
			", Stan powietrza: " + document.getElementById('stationO3Stan').innerHTML +*/
			", Informacja MPK: " + document.getElementById('informacjaMPK').innerHTML;
		} else {
			message = document.getElementById('messageTxt').value;
		}

        //CONFIGURATION
        var options = {
            replaceLineBreaks: false, // true to replace \n by a new line, false by default
            android: {
                //intent: 'INTENT'  // send SMS with the native android SMS messaging
                intent: '' // send SMS without open any other app
            }
        };

        var success = function () { alert('Message sent successfully'); };
        var error = function (e) { alert('Message Failed:' + e); };
        sms.send(number, message, options, success, error);
    }
}