$(document).ready(function() {

	// var ie_9 = navigator.appVersion.indexOf("MSIE 9.") != -1;
    // var ie_8 = navigator.appVersion.indexOf("MSIE 8.") != -1;
    var ie_7 = navigator.appVersion.indexOf("MSIE 7.") != -1;
    var ie_6 = navigator.appVersion.indexOf("MSIE 6.") != -1;

    if (ie_7 || ie_6) {

        window.location.replace("js/old-browser-redirect/index.html");
    } 

});