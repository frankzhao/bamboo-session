const pattern = /https:\/\/.+\.bamboohr.com/;
if (location.href.match(pattern)) {
    if (!location.href.includes('login.php')) {
        let sub = document.getElementById('openidConnectSub').value;
        chrome.runtime.sendMessage({action: 'getSource', sub: sub});
    }
}