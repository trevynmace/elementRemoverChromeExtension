chrome.storage.sync.get({
	    elementsToRemove: ''
  	}, function(items) {
	    var elementsArray = items.elementsToRemove.split("\n");
	    
	    for (i = 0; i < elementsArray.length; i++) {
	    	var className = '.' + elementsArray[i];
	    	$(className).hide();
		}
	}
);

chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
	    if( request.message === "clicked_browser_action" ) {
			chrome.storage.sync.get({
				    elementsToRemove: ''
			  	}, function(items) {
				    var elementsArray = items.elementsToRemove.split("\n");
				    
				    for (i = 0; i < elementsArray.length; i++) {
				    	var className = '.' + elementsArray[i];
				    	$(className).show();
					}
				}
			);
	    }
    }
);