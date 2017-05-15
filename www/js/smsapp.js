var smsapp = {
    sendSms: function() {
        var number = document.getElementById('numberTxt').value;
        var message;
		if (document.getElementById('messageTxt').value === "") {
			message = "Nazwa stacji: " + document.getElementById('stationNameH').innerHTML + 
			"<br /> " + document.getElementById('pzPM10').innerHTML + 
			":<br />Wartość pomiaru: " + document.getElementById('stationPM10') + 
			"<br />Data pomiaru: " + document.getElementById('stationPM10Date') +
			"<br />Norma: " + document.getElementById('stationPM10Norm') +
			"<br />Norma: " + document.getElementById('stationPM10Stan') +
			"<br /><br /> " + document.getElementById('daNO2').innerHTML + 
			":<br />Wartość pomiaru: " + document.getElementById('stationNO2') + 
			"<br />Data pomiaru: " + document.getElementById('stationNO2Date') +
			"<br />Norma: " + document.getElementById('stationNO2Norm') +
			"<br />Norma: " + document.getElementById('stationNO2Stan') +
			"<br /><br /> " + document.getElementById('twCO').innerHTML + 
			":<br />Wartość pomiaru: " + document.getElementById('stationCO') + 
			"<br />Data pomiaru: " + document.getElementById('stationCODate') +
			"<br />Norma: " + document.getElementById('stationCONorm') +
			"<br />Norma: " + document.getElementById('stationCOStan') +
			"<br /><br /> " + document.getElementById('bC6H6').innerHTML + 
			":<br />Wartość pomiaru: " + document.getElementById('stationBenzen') + 
			"<br />Data pomiaru: " + document.getElementById('stationBenzenDate') +
			"<br />Norma: " + document.getElementById('stationBenzenNorm') +
			"<br />Norma: " + document.getElementById('stationBenzenStan') +
			"<br /><br /> " + document.getElementById('pzPM25').innerHTML + 
			":<br />Wartość pomiaru: " + document.getElementById('stationPM25') + 
			"<br />Data pomiaru: " + document.getElementById('stationPM25Date') +
			"<br />Norma: " + document.getElementById('stationPM25Norm') +
			"<br />Norma: " + document.getElementById('stationPM25Stan') +
			"<br /><br /> " + document.getElementById('dsSO2').innerHTML + 
			":<br />Wartość pomiaru: " + document.getElementById('stationSO2') + 
			"<br />Data pomiaru: " + document.getElementById('stationSO2Date') +
			"<br />Norma: " + document.getElementById('stationSO2Norm') +
			"<br />Norma: " + document.getElementById('stationSO2Stan') +
			"<br /><br /> " + document.getElementById('oO3').innerHTML + 
			":<br />Wartość pomiaru: " + document.getElementById('stationO3') + 
			"<br />Data pomiaru: " + document.getElementById('stationO3Date') +
			"<br />Norma: " + document.getElementById('stationO3Norm') +
			"<br />Norma: " + document.getElementById('stationO3Stan');
		} else {
			message = document.getElementById('messageTxt').value;
		}
		document.getElementById('test').innerHTML = message;

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