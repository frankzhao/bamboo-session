chrome.runtime.onMessage.addListener(function (request, sender, response) {
    const bambooDomain = sender.origin;
    console.log("Keeping alive BambooHR session...")
    setInterval(function () {
        fetch(bambooDomain).then(r => r.text()).then(_ => {
            console.log('Refreshed BambooHR.');
        });
    }, 1000 * 60 * 25)
});
