console.log('Script Loaded');

function send() {
  fetch('https://ntfy.sh/ChassterTest', {
  method: 'POST', // PUT works too
  body: 'Someone visited your site'
})
}