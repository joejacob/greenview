// tells an event page (fontHandler.js) to add an event listener for web requests for fonts
chrome.runtime.sendMessage({task: "updateFonts"}, function(response) {
	console.log(response.value);
});

// adds listeners to all images such that they only load once they're
// within the view of the webpage
chrome.runtime.sendMessage({task: "hideImages"}, function(response) {
	console.log(response.value);
});

// this is triggered once all of the HTML has been downloaded and parsed but not necessarily
// when all of the JavaScript or CSS for the page has been fully applied
document.addEventListener('DOMContentLoaded', function() {
	// make sure that extension is on
	chrome.storage.sync.get('state', function(result) {
		if(result.state == '1') {
			console.log("greening...");
			greenifyPage();
		}
	});
});

function greenifyPage() {
	
}