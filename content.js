console.log("Keeping alive BambooHR session...")
window.setInterval(function() {
    fetch('https://section6.bamboohr.com').then(r => r.text()).then(_ => {
        console.log('Refreshed BambooHR.');
    });
}, 1000 * 60 * 25)