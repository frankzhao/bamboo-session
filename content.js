const pattern = /https:\/\/.+\.bamboohr.com/;
if (location.href.match(pattern)) {
    chrome.runtime.sendMessage({action: 'getSource'}, function (response) {
    });
}