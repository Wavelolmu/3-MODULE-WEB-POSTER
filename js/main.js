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

window.addEventListener('scroll', () => {
  const head = document.querySelector('.witchhead');
  const mouth = document.querySelector('#witchmouth');
  const dot = document.querySelector('#helldot');
  const hell = document.querySelector('#hell');
  const scrolled = window.scrollY;
  var rate = (scrolled - 2760) / 5 - 180;
  var dotRate = (scrolled - 4400) / 3 ;
  if (rate >= 6000) {rate === 6000};
  if (scrolled < 2760) {
    head.style.transform = 'rotate(180deg)';
    mouth.style.transform = `translate(65%, 562%)`;
    console.log(rate);
  } else {
    head.style.transform = 'rotate(' + rate + 'deg)';
    mouth.style.transform = `translate(65%, 562%)`;
    dot.style.bottom = `-90px`;
    dot.style.zIndex = '1';
    dot.style.height = 1;
    dot.style.width = 1;
    dot.style.background = `none`;
    if (rate < 0) {rate === 0};
  };
  if (scrolled >= 3660) {
    head.style.transform = 'rotate(0deg)';
    dot.style.bottom = `-55px`;
    dot.style.backgroundColor = `white`;
  };
  if (scrolled >= 4200) {
    mouth.style.transform = `translate(65%, 810%)`;
    dot.style.bottom = `-90px`;
    dot.style.zIndex = '1';
    dot.style.height = 1;
    dot.style.width = 1;
    dot.style.background = `none`;
  };
  if (scrolled >= 4400) {
    dot.style.background = `radial-gradient(circle at center, black 10%, red 70%)`;
    dot.style.backgroundSize = `100% 100%`;
    dot.style.animation = `dot 3s linear infinite`;
    dot.style.backgroundColor = `red`;
    dot.style.zIndex = '1000';
    dot.style.height = dotRate + 'vh';
    dot.style.width = dotRate + 'vh';
    dot.style.transform = 'translate(' + -dotRate * 3.16 + 'px, ' + dotRate * 2.3 + 'px)';
  };
  if (scrolled >= 5200) {
    hell.style.opacity = '1';
  } else {
    hell.style.opacity = '0';
  };
});

function hellSlides() {
  spaceH = screen.height - handHeight - 50;
  spaceW = screen.width - (handHeight / 1.5) - 50;
  document.querySelector('#hand1').style.top = Math.round(Math.random() * spaceH) + 'px';
  document.querySelector('#hand1').style.left = Math.round(Math.random() * spaceW) + 'px';
}
