// var hideImagesCallback = function lazyLoadImage(details) {
// 	console.log(details);
// 	return { cancel: false };
// }

// var hideImagesFilter = {
// 	urls: ["<all_urls>"],
// 	types: ["image"]
// }

// var hideImagesOptExtraInfoSpec = ["blocking"];


// function hideImages() {
// 	// triggered when a web request for a webfont is started
// 	chrome.webRequest.onBeforeRequest.addListener(
// 		hideImagesCallback, 
// 		hideImagesFilter, 
// 		hideImagesOptExtraInfoSpec
// 		);

// 	return "handler for images added";
// }



// function hideImages() {
// 	console.log("hi12312");
// 	//var target = document.getElementsByTagName("html")[0];
// 	var config = {
// 		childList: true,
// 		subtree: true,
// 		characterData: true
// 	};
// 	var imageObserver = new MutationObserver(function(mutations) {
// 		console.log("hi");
// 		mutations.forEach(function(m) {
// 			console.log(m.type);
// 		});
// 	});

// 	imageObserver.observe(document.body, config);
// 	console.log("observing");
// 	return "handler for images added";
// }	