var updateFontsCallback = function updateFonts(details) {
	// check if a non-system font is being loaded

	// if a non-system font is being loaded, switch to a default system font
	// maintain the same size
	// weight, variant
	// i think i only need to change the font-family attribute
	
	return {};
}
var updateFontsFilter = {urls: ["<all_urls>"]};
var updateFontsOptExtraInfoSpec = [];

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