// only calls functions if extension is on
chrome.storage.sync.get('state', function(result) {
	if(result.state == '1') {
		// must be performed by a background script
		chrome.runtime.sendMessage({task: "updateFonts"}, function(response) {
			console.log(response.value);
		});

		// must be performed by a content script
		hideImages();
	}
});
