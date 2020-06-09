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

function initializeHand(){
  var handHeight = String(getComputedStyle(document.documentElement).getPropertyValue('--hand-height')).slice(0, 4);
  spaceH = screen.height - handHeight - 50;
  spaceW = screen.width - (handHeight / 1.5) - 50;
  setInterval(moveHand1, 700);
  console.log(handHeight);
}

function moveHand1(handHeight) {
  document.querySelector('#hand1').style.top = Math.round(Math.random() * spaceH) + 'px';
  document.querySelector('#hand1').style.left = Math.round(Math.random() * spaceW) + 'px';
  var rotateAngle  = Math.round(Math.random() * 120 - Math.random() * 120) + 'deg';
  document.querySelector('#hand1').style.transform = `rotate(${rotateAngle})`;
}

window.onload = initializeHand();

// window.addEventListener('scroll', () => {
//   const scrolled = window.scrollY;
//   if (scrolled >= 2650) {
//     document.querySelector('.witchhead').style.transform = 'rotate(0deg) ';
//   };
//   if (scrolled >= 3300) {
//     document.querySelector('#witchmouth').style.transform = `translate(65%, 720%)`;
//   };
// });
