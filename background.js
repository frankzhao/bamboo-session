let bambooDomain = "https://bamboohr.com";
let lastRefresh = null;

chrome.alarms.create("refresh", {periodInMinutes: 20});
chrome.alarms.onAlarm.addListener(() => {
    console.log("Keeping alive BambooHR session - ", bambooDomain);
    fetch(bambooDomain, {redirect: "follow"}).then(r => r.text()).then(_ => {
        console.log('Refreshed BambooHR.');
        lastRefresh = new Date();
    });
});

chrome.runtime.onMessage.addListener(function (request, sender, response) {
    bambooDomain = sender.origin;
});
