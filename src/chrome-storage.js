document.addEventListener('DOMContentLoaded', function () {
	restoreData();
	document.getElementById("submit-button").addEventListener("click", saveData);  
});

function saveData() {
	var elementsToRemove = document.getElementById('elements-to-remove-textarea').value;

	chrome.storage.sync.set({
		elementsToRemove: elementsToRemove
	}, function() {
		var status = document.getElementById('status');
		status.textContent = 'Options saved.';

		setTimeout(function() {
	      	status.textContent = '';
	    }, 2000);
	});
}

function restoreData() {
 	chrome.storage.sync.get({
	    elementsToRemove: ''
  	}, function(items) {
	    document.getElementById('elements-to-remove-textarea').value = items.elementsToRemove;
	});
}