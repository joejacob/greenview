// track page views
var _gaq = _gaq || [];
_gaq.push(['_setAccount', 'UA-105747972-1']);
_gaq.push(['_trackPageview']);
(function() {
  var ga = document.createElement('script');
  ga.type = 'text/javascript';
  ga.async = true;
  ga.src = 'https://ssl.google-analytics.com/ga.js';
  var s = document.getElementsByTagName('script')[0];
  s.parentNode.insertBefore(ga, s);
})();

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