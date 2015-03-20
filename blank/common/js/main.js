function wlCommonInit(){
	// Common initialization code goes here
    var env = WL.Client.getEnvironment();
        if(env === WL.Environment.IPHONE || env === WL.Environment.IPAD){
            document.body.classList.add('platform-ios'); 
        } else if(env === WL.Environment.ANDROID){
            document.body.classList.add('platform-android'); 
        }
}
