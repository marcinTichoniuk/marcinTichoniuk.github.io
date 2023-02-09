console.log('working');

const experimentId = 'c3zgXYyrQSennxn4aLr7wQ';
const variantId = Math.floor(Math.random() * 2);

gtag('event', 'experiment_impression', {
  experiment_id: experimentId,
  variant_id: experimentId.variantId,
  send_to: 'G-0C961JB7GE',
});

const pElement = document.querySelector('p');
if (variantId === 0) {
  pElement.textContent = 'original variant';
} else {
  pElement.textContent = 'second variant';
}
