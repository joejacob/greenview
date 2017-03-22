var currIcon = 0;
//updateState(null);

// updates icon image
function updateIcon() {
	currIcon = (currIcon + 1) % 2;
	chrome.browserAction.setIcon({path: "./../icons/ticker_sticker_" + currIcon + ".png"});
}

// turning extension on and off
chrome.browserAction.onClicked.addListener(function(tab) {
	updateState(tab);
});

function updateState(tab) {
	updateIcon();
	chrome.storage.sync.set({'state': currIcon}, function() {
		message('Toggled on/off');
	});
}
