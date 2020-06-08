window.onload = function starterApper() {
  document.querySelector('#logo').style.opacity = '1';
  document.querySelector('h1').style.opacity = '1';
};

function starterDisappear() {
  document.querySelector('#logo').style.opacity = '0';
  document.querySelector('h1').style.opacity = '0';
  setTimeout(() => document.querySelector('#starter').style.opacity = '0', 900);
  setTimeout(() => document.querySelector('#starter').style.display = 'none', 1500);
};

setTimeout(starterDisappear, 2000);
