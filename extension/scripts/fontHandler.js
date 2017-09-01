// cancel the request for the webfont
var updateFontsCallback = function cancelFonts(details) {
	return { cancel: true };
}

// filters the URLs for webrequests
var updateFontsFilter = {
	urls: ["<all_urls>"],
	types: ["font"]
};

// allows the function to be blocking
var updateFontsOptExtraInfoSpec = ["blocking"];

// adds web request listener
function updateFonts() {
	// triggered when a web request for a webfont is started
	chrome.webRequest.onBeforeRequest.addListener(
		updateFontsCallback, 
		updateFontsFilter, 
		updateFontsOptExtraInfoSpec
		);

	return "blocking webfonts";
}