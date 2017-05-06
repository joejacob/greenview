var currIcon = 0;
updateState(null);

// updates icon image
function updateIcon() {
	currIcon = (currIcon + 1) % 2;
	chrome.browserAction.setIcon({path: "./../icons/greenview_" + currIcon + ".png"});
}

// turning extension on and off
chrome.browserAction.onClicked.addListener(function(tab) {
	updateState(tab);
});

function updateState(tab) {
	updateIcon();
	chrome.storage.sync.set({'state': currIcon}, function() {
		console.log("Extension toggled " + (currIcon == 1 ? "on" : "off"));
	});
}

// listener for messages from content scripts
chrome.runtime.onMessage.addListener(
	function(request, sender, sendResponse) {
		console.log(sender.tab ? "message from a content script: " + sender.tab.url : "message from the extension");
		var valueText;

		if(request.task == "updateFonts") {
			valueText = updateFonts();
		}

		sendResponse({value: valueText});

		return true;
	});