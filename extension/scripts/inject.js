//updateFonts();

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
	//updateFonts();
}


function updateFonts() {
	// check if a non-system font is being loaded

	// if a non-system font is being loaded, switch to a default system font
	// maintain the same size
	// weight, variant
	// i think i only need to change the font-family attribute

}
