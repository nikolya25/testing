var push = PushNotification.init({
  android: {
      senderID: "806082497848" //Project ID from Google developer console
  }
});
 
push.on('registration', function(data) {
  //We need to save registration id somewhere on server to be able to send push notifications to this device
  saveRegistrationIdSomewhereOnServer(data.registrationId);
});
 
push.on('notification', function(data) {
  //Setup notification received event handler. data object contains notification params
});
 
push.on('error', function(e) {
  // An error has occured during push notifications initialization, e.message contains error message text
});