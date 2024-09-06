console.log('Script Loaded');

function send() {
  fetch('https://ntfy.sh/ChassterTest', {
  method: 'POST', // PUT works too
  body: 'Sent by your site'
})
}