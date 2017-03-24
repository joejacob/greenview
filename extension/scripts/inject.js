// tells an event page (fontHandler.js) to add an event listener for web requests for fonts
chrome.runtime.sendMessage({task: "updateFonts"}, function(response) {
	console.log(response.value);
});

// checks for DOM mutations that are images and makes them lazy load
function hideImages() {
	var config = {
		childList: true,
		subtree: true
	};

	var imageObserver = new MutationObserver(function(mutations) {
		mutations.forEach(function(mutation) {
			mutation.addedNodes.forEach(function(node) {
				console.log(node);
				if(node.tagName == "IMG") {
					node.classList.add("lazy");
					var srcValue = node.getAttribute("src");
					node.removeAttribute("src");
					node.setAttribute("data-original", srcValue);

					$(node).lazyload({
						event: "mouseover"
					});
				}	
			});
		});
	});

	imageObserver.observe(document, config);
	return "handler for images added";
}

hideImages();


// this is triggered once all of the HTML has been downloaded and parsed but not necessarily
// when all of the JavaScript or CSS for the page has been fully applied
document.addEventListener('DOMContentLoaded', function() {
	// make sure that extension is on
	chrome.storage.sync.get('state', function(result) {
		if(result.state == '1') {

		}
	});
});