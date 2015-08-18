// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', ['ionic'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
});

var Messages = {
  // Add here your messages for the default language.
  // Generate a similar file with a language suffix containing the translated messages.
  // key1 : message1,
};

var wlInitOptions = {
    // Options to initialize with the WL.Client object.
    // For initialization options please refer to IBM MobileFirst Platform Foundation Knowledge Center.
};

// Called automatically after MFP framework initialization by WL.Client.init(wlInitOptions).
function wlCommonInit(){
	// Common initialization code goes here
  console.log('MobileFirst Client SDK Initilized');
  angular.element(document).ready(function() {
    mfpMagicPreviewSetup();
    angular.bootstrap(document.body, ['starter']);
  });
}

function mfpMagicPreviewSetup(){
  //nothing to see here :-), just some magic to make ionic work with mfp preview, similar to ionic serve --lab
  if(WL.StaticAppProps.ENVIRONMENT === 'preview'){
    //running mfp preview (MBS or browser)
    if(WL.StaticAppProps.PREVIEW_ENVIRONMENT === 'android'){
      document.body.classList.add('platform-android');
      ionic.Platform.setPlatform("android");
    } else { //then ios
      document.body.classList.add('platform-ios');
      ionic.Platform.setPlatform("ios");
    }
	} 
}
