function updateClock() {
const clockElement = document.getElementById('live-clock');
const now = new Date();
// Custom Formatting Options
const options = {
weekday: 'long',   // "Friday"
year: 'numeric',   // "2026"
month: 'short',    // "Jul"
day: 'numeric',    // "3"
hour: '2-digit',   // "07"
minute: '2-digit', // "39"
second: '2-digit', // "40"
hour12: true       // true = AM/PM, false = 24-hour military time
};
// Convert the date object into a clean, localized string
// 'en-US' ensures standard English formatting, but you can use 'default' for browser language
const formattedTime = now.toLocaleDateString('en-US', options);
// Inject it into the HTML
clockElement.textContent = formattedTime;
}
// Run the clock immediately when the page loads
updateClock();
// Keep it ticking every minute (1s = 1000ms)
setInterval(updateClock, 60000);
