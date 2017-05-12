App42.initialize("cbd62cb6d46c4cffc5730955a9f9f1319a79afbcddbc12daf71ef808d40fbbdd","a1ce760466ea6cd6e54238a0938b4a9b712ba40379e147957e3707039a0d90b7");

var userName = "Nick",
	deviceToken = "Device Token",
	channel = "News Channel",  
	description = "Channel all about the news", 
	message  = "Message which you have to send",  
	result;    
	
var pushNotificationService  = new App42Push();  

pushNotificationService.storeDeviceToken(userName, deviceToken,DeviceType.ANDROID,{    
    success: function(object)   
    {    
        var pushNotification = JSON.parse(object);    
        result = pushNotification.app42.response.push;  
        console.log("UserName is : " + result.userName)   
        console.log("Type is : " +  result.type);  
        console.log("DeviceToken is : " +  result.deviceToken);   
    },    
    error: function(error) {    
    }    
});  

pushNotificationService.createChannelForApp(channel, description,{    
    success: function(object)   
    {    
        var pushNotification = JSON.parse(object);    
        result = pushNotification.app42.response.push.channels.channel;  
        console.log("ChannelName is : " + result.channelName)     
        console.log("Description is: " +  result.description);    
    },    
    error: function(error) {    
    }    
}); 

pushNotificationService.subscribeToChannel(channel, userName,{    
    success: function(object)   
    {    
        var pushNotification = JSON.parse(object);    
        result = pushNotification.app42.response.push.channels.channel;  
        console.log("UserName is : " + pushNotification.app42.response.push.userName)     
        console.log("ChannelName is : " + result.channelName)     
    },    
    error: function(error) {    
    }    
});  

pushNotificationService.sendPushMessageToAll(message, {    
    success: function(object)   
    {    
        var pushNotification = JSON.parse(object);    
        result = pushNotification.app42.response.push;  
        console.log("Message is : " + result.message)     
        console.log("Expiry is : " + result.expiry)   
    },    
    error: function(error) {    
    }    
}); 