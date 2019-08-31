chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    if( request.message === "clicked_browser_action" ) {
      $('.task-labels').remove();
      $('.subTasks').remove();
      $('.task-groupLabel').remove();
    }
  }
);