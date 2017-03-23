// cancels the webrequest
var updateFontsCallback = function updateFonts(details) {
	// cancel the request for the webfont
	return { cancel: true };
}

// filters the URLs for webrequests
var updateFontsFilter = {
	urls: ["<all_urls>"],
	types: ["font"]
};

// allows the function to be blocking
var updateFontsOptExtraInfoSpec = ["blocking"];

// listener for messages from content scripts
chrome.runtime.onMessage.addListener(
	function(request, sender, sendResponse) {
		console.log(sender.tab ? "message from a content script: " + sender.tab.url : "message from the extension");
		if(request.task == "updateFonts") {
			// triggered when a web request for a webfont is started
			chrome.webRequest.onBeforeRequest.addListener(
				updateFontsCallback, 
				updateFontsFilter, 
				updateFontsOptExtraInfoSpec
				);

			// send response that event listener was added
			sendResponse({value: "web request font listener was added"});
		}
	});