const modal = document.getElementById('modal');
const close = document.getElementById('close');
const copy = document.getElementById('copy');
btcAddress = 'bc1que4da8sfzt25e2x72j9yx6vvxzepug97rszcls'

function openModal() {
  modal.classList.remove('hidden');
}

close.addEventListener('click', () => {
  setTimeout(() => {
    modal.classList.add('hidden');
  }, 100);
});

copy.addEventListener('click', () => {
  navigator.clipboard.writeText(btcAddress);
  copy.disabled = true;
  copy.innerText = 'Copied!';
  
  setTimeout(() => {
    copy.disabled = false;
    copy.innerText = 'Copy Address';
  }, 2000);
});