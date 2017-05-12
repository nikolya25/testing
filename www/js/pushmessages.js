PushNotification.init({
    android: {
        senderID: "806082497848"
    }
});

PushNotification.hasPermission(function(data) {
    if (data.isEnabled) {
        console.log('isEnabled');
    }
});

push.on('registration', function(data) {
	console.log(data.registrationId);
});

push.on('notification', function(data) {
	console.log(data.message);
	console.log(data.title);
	console.log(data.count);
	console.log(data.sound);
	console.log(data.image);
	console.log(data.additionalData);

});

push.on('error', function(e) {
	console.log(e.message);
});
