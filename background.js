let bambooDomain = ''
let sub = ''

function fetchRemainingTime() {
    // Fetch and log the remaining session time.
    fetch(bambooDomain + '/auth/check_session?isOnboarding=false')
        .catch(error => console.log(error))
        .then(r => r.json())
        .then(data => {
                console.log('Session minutes remaining', data.SessionMinutesLeft)
            }
        )
}

chrome.runtime.onMessage.addListener(function (request, sender, response) {
    if (request.action !== 'getSource') {
        return;
    }
    console.log("Setting up chrome alarm");
    chrome.alarms.create('extend', {periodInMinutes: 10});
    bambooDomain = sender.origin;
    sub = request.sub
    console.log('openIdConnectSub:', sub)
});

chrome.alarms.onAlarm.addListener(function (alarm) {
    console.log("Keeping alive BambooHR session...");
    let url = bambooDomain + '/auth/finish_google_login?openIdConnectSub='
        + sub + '&openIdConnectIss=https%3A%2F%2Faccounts.google.com'

    // Refresh the session.
    console.log('Keepalive:', url)
    fetch(url)
        .catch(error => console.log(error))
        .then(_ => {
            console.log('Refreshed BambooHR.');
            fetchRemainingTime();
        })
});