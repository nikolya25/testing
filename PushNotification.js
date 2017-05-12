Skip to content
This repository
Search
Pull requests
Issues
Gist
 @nikolya25
 Sign out
 Watch 111
  Star 1,398
  Fork 1,342 phonegap-build/PushPlugin
forked from bobeast/PushPlugin-deprecated
 Code  Issues 375  Pull requests 69  Projects 0  Wiki  Pulse  Graphs
Branch: master Find file Copy pathPushPlugin/Example/www/PushNotification.js
595e762  on 26 Mar 2013
 Bob Easterday Add cold-start functionality
1 contributor
RawBlameHistory     
66 lines (48 sloc)  2.2 KB

var PushNotification = function() {
};


	// Call this to register for push notifications. Content of [options] depends on whether we are working with APNS (iOS) or GCM (Android)
	PushNotification.prototype.register = function(successCallback, errorCallback, options) {
    	if (errorCallback == null) { errorCallback = function() {}}

		if (typeof errorCallback != "function")  {
			console.log("PushNotification.register failure: failure parameter not a function");
			return;
		}

		if (typeof successCallback != "function") {
			console.log("PushNotification.register failure: success callback parameter must be a function");
			return;
		}

		cordova.exec(successCallback, errorCallback, "PushPlugin", "register", [options]);
	};

    // Call this to unregister for push notifications
    PushNotification.prototype.unregister = function(successCallback, errorCallback) {
		if (errorCallback == null) { errorCallback = function() {}}

		if (typeof errorCallback != "function")  {
			console.log("PushNotification.unregister failure: failure parameter not a function");
			return;
		}

		if (typeof successCallback != "function") {
			console.log("PushNotification.unregister failure: success callback parameter must be a function");
			return;
		}

		cordova.exec(successCallback, errorCallback, "PushPlugin", "unregister", []);
    };
 
 
    // Call this to set the application icon badge
    PushNotification.prototype.setApplicationIconBadgeNumber = function(successCallback, badge) {
		if (errorCallback == null) { errorCallback = function() {}}

		if (typeof errorCallback != "function")  {
			console.log("PushNotification.setApplicationIconBadgeNumber failure: failure parameter not a function");
			return;
		}

		if (typeof successCallback != "function") {
			console.log("PushNotification.setApplicationIconBadgeNumber failure: success callback parameter must be a function");
			return;
		}

		cordova.exec(successCallback, successCallback, "PushPlugin", "setApplicationIconBadgeNumber", [{badge: badge}]);
    };

//-------------------------------------------------------------------

if(!window.plugins) {
	window.plugins = {};
}
if (!window.plugins.pushNotification) {
	window.plugins.pushNotification = new PushNotification();
}
Contact GitHub API Training Shop Blog About
© 2017 GitHub, Inc. Terms Privacy Security Status Help