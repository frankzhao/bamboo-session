const pattern = /https:\/\/.+\.bamboohr.com/;
if (location.href.match(pattern)) {
    console.log("Requesting BambooHR session refresh")
    chrome.runtime.sendMessage({action: 'getSource'}, function (_) {
    });
}