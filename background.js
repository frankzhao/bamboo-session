let refreshTimerSet = false;
chrome.runtime.onMessage.addListener(function (request, sender, response) {
    const bambooDomain = sender.origin;
    if (!refreshTimerSet) {
        setInterval(function () {
            console.log("Keeping alive BambooHR session...");
            fetch(bambooDomain).then(r => r.text()).then(_ => {
                console.log('Refreshed BambooHR.');
            });
        }, 1000 * 60 * 25)
        refreshTimerSet = true;
    }
});
