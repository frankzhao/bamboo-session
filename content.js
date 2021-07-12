const pattern = /https:\/\/.+\.bamboohr.com/;
if (location.href.match(pattern)) {
    while (document.getElementById('openidConnectSub') === null) {
        // Wait for dom to load.
    }
    let sub = document.getElementById('openidConnectSub').value;
    chrome.runtime.sendMessage({action: 'getSource', sub: sub});
}