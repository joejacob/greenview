var hideImagesCallback = function lazyLoadImage(details) {
	console.log(details.url);
	return { cancel: true };
}

var hideImagesFilter = {
	urls: ["<all_urls>"],
	types: ["image"]
}

var hideImagesOptExtraInfoSpec = ["blocking"];


function hideImages() {
	// triggered when a web request for a webfont is started
	chrome.webRequest.onBeforeRequest.addListener(
		hideImagesCallback, 
		hideImagesFilter, 
		hideImagesOptExtraInfoSpec
		);

	return "test";
}