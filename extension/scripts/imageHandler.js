// checks for DOM mutations that are images and makes them lazy load
function hideImages() {
	var config = {
		childList: true,
		subtree: true
	};

	var imageObserver = new MutationObserver(function(mutations) {
		mutations.forEach(function(mutation) {
			mutation.addedNodes.forEach(function(node) {
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