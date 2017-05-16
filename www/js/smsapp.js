var smsapp = {
    sendSms: function() {
        var number = document.getElementById('numberTxt').value;
        var message;
		/*switch (tytul) {
		case "AntySMOG":
			document.getElementById('messageTxt').placeholder = document.getElementById('informacjaMPK').innerHTML;
			break;
		case "Kraków, ul. Złoty Róg":
			document.getElementById('messageTxt').placeholder = "Stan powietrza na stacji " + 
			document.getElementById('stationNameH').innerHTML + " jest " + 
			document.getElementById('station1Stan').innerHTML;
			break;
		case "Kraków, ul. Dietla":
			document.getElementById('messageTxt').placeholder = "Stan powietrza na stacji " + 
			document.getElementById('stationNameH').innerHTML + " jest " + 
			document.getElementById('station2Stan').innerHTML;
			break;
		case "Kraków, Aleja Krasińskiego":
			document.getElementById('messageTxt').placeholder = "Stan powietrza na stacji " + 
			document.getElementById('stationNameH').innerHTML + " jest " + 
			document.getElementById('station3Stan').innerHTML;
			break;
		case "Kraków, ul. Bulwarowa":
			document.getElementById('messageTxt').placeholder = "Stan powietrza na stacji " + 
			document.getElementById('stationNameH').innerHTML + " jest " + 
			document.getElementById('station4Stan').innerHTML;
			break;
		case "Kraków, os. Wadów":
			document.getElementById('messageTxt').placeholder = "Stan powietrza na stacji " + 
			document.getElementById('stationNameH').innerHTML + " jest " + 
			document.getElementById('station5Stan').innerHTML;
			break;
		case "Kraków, os. Piastów":
			document.getElementById('messageTxt').placeholder = "Stan powietrza na stacji " + 
			document.getElementById('stationNameH').innerHTML + " jest " + 
			document.getElementById('station6Stan').innerHTML;
			break;
		case "Kraków, ul. Bujaka":
			document.getElementById('messageTxt').placeholder = "Stan powietrza na stacji " + 
			document.getElementById('stationNameH').innerHTML + " jest " + 
			document.getElementById('station7Stan').innerHTML;
			break;
		case "Kraków, ul. Telimeny":
			document.getElementById('messageTxt').placeholder = "Stan powietrza na stacji " + 
			document.getElementById('stationNameH').innerHTML + " jest " + 
			document.getElementById('station8Stan').innerHTML;
		}*/
		message = document.getElementById('messageTxt').placeholder;
		if (document.getElementById('messageTxt').value === "") {
			message = document.getElementById('messageTxt').placeholder;
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