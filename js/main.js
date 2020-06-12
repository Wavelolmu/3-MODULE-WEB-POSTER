function starterApper() {
  document.querySelector('#logo').style.opacity = '1';
  document.querySelector('h1').style.opacity = '1';
  setTimeout(starterDisappear, 2000);
};

function starterDisappear() {
  document.querySelector('#logo').style.opacity = '0';
  document.querySelector('h1').style.opacity = '0';
  setTimeout(() => document.querySelector('#starter').style.opacity = '0', 600);
  setTimeout(() => document.querySelector('#starter').style.display = 'none', 1500);
};



if (screen.width <= 500) {
  var media = 1;
} else if (screen.width <= 768) {
  media = 1;
} else if (screen.width <= 1024) {
  media = 1;
} else {
  media = 1;
}


function initializeHand(){
  var handHeight = String(getComputedStyle(document.documentElement).getPropertyValue('--hand-height')).slice(0, 4);
  spaceH = screen.height - handHeight;
  spaceW = screen.width - (handHeight / 1.5);
  if (spaceH < -10) {
    spaceH = spaceH * -1;
  }
  if (spaceW < -10) {
    spaceW = spaceW * -1;
  }
  setInterval(moveHand1, 700);
  console.log(screen.height);
  console.log(handHeight);
}

function moveHand1(handHeight) {
  document.querySelector('#hand1').style.top = Math.round(Math.random() * spaceH * media) + 'px';
  document.querySelector('#hand1').style.left = Math.round(Math.random() * spaceW * media) + 'px';
  var rotateAngle  = Math.round(Math.random() * 120 - Math.random() * 120) + 'deg';
  document.querySelector('#hand1').style.transform = `rotate(${rotateAngle})`;
}

window.onload = initializeHand();

window.addEventListener('scroll', () => {
  const head = document.querySelector('.witchhead');
  const mouth = document.querySelector('#witchmouth');
  const dot = document.querySelector('#helldot');
  const hell = document.querySelector('#hell');
  const demon = document.querySelector('#i--demon');
  const angel = document.querySelector('#i--angel');
  const scrolled = window.scrollY;
  var rate = (scrolled - 2760) / 5 - 180;
  var dotRate = (scrolled - 4400) / 3 ;


  if (scrolled >= 1530) {
    angel.style.opacity = 0;
    demon.style.opacity = (scrolled - 1530) / 250;
  } else if (scrolled >= 1300) {
    demon.style.opacity = 0;
    angel.style.opacity = (1500 - scrolled) / 200;
  };

  if (scrolled >= 5300) {scrolled = 5300};

  if (scrolled < 2760) {
    head.style.transform = 'rotate(180deg)';
    mouth.style.transform = `translate(65%, 562%)`;
  } else {
    head.style.transform = 'rotate(' + rate + 'deg)';
    mouth.style.transform = `translate(65%, 562%)`;
    dot.style.bottom = `-90px`;
    dot.style.zIndex = '1';
    dot.style.height = '1';
    dot.style.width = '1';
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
    document.querySelector('#hell').style.display = 'none';
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
    document.querySelector('#hell').style.display = 'block';
  };
  if (scrolled >= 5200) {
    hell.style.opacity = '1';
  } else {
    hell.style.opacity = '0';
  };
});

var i = 1;

function apocalypse(){
  var demonHeight1 = Math.round(Math.random() * screen.height);
  spaceH1 = screen.height - demonHeight1;
  spaceW1 = screen.width - demonHeight1;

  var demonHeight2 = Math.round(Math.random() * screen.height);
  spaceH2 = screen.height - demonHeight2;
  spaceW2 = screen.width - demonHeight2;

  var demonHeight3 = Math.round(Math.random() * screen.height);
  spaceH3 = screen.height - demonHeight3;
  spaceW3 = screen.width - demonHeight3;

  setInterval(hellSlides, 750);
};

function hellSlides(demonHeight1, demonHeight2, demonHeight3, demonHeight4) {
  const demon1 = document.querySelector('#demonpic1');
  const demon2 = document.querySelector('#demonpic2');
  const demon3 = document.querySelector('#demonpic3');

  if (i % 2 == 1) {
    document.querySelector('#hell').style.backgroundColor = `black`;
  } else {
    document.querySelector('#hell').style.backgroundColor = `red`;
  };

  var rand1 = Math.ceil(Math.random() * i);
  if (rand1 > 6) { rand1 = 6 };
  if (rand1 < 1) { rand1 = 1 };

  var rand2 = Math.ceil(Math.random() * i);
  if (rand2 > 6) { rand2 = 6 };
  if (rand2 < 1) { rand2 = 1 };

  var rand3 = Math.ceil(Math.random() * i);
  if (rand3 > 6) { rand3 = 6 };
  if (rand3 < 1) { rand3 = 1 };

  demon1.src = 'pics/hell/demons/1demon' + rand1 + '.gif';
  demon2.src = 'pics/hell/demons/2demon' + rand2 + '.gif';
  demon3.src = 'pics/hell/demons/3demon' + rand3 + '.gif';

  document.querySelector('#hellword1').src = 'pics/hell/' + i + '.svg';


  if (rand1 = 4) {
    demon1.style.height = '1000px';
  } else {
    demon1.style.height = demonHeight1 + 'px';
  };
  demon1.style.top = Math.round(Math.random() * spaceH1) - 150 + 'px';
  demon1.style.left = Math.round(Math.random() * spaceW1) - 150 + 'px';
  demon1.style.zIndex = Math.round(Math.random() * 1000);

  demon2.style.height = demonHeight2 + 'px';
  demon2.style.top = Math.round(Math.random() * spaceH2) - 150 + 'px';
  demon2.style.left = Math.round(Math.random() * spaceW2) - 150 + 'px';
  demon2.style.zIndex = Math.round(Math.random() * 1000);

  demon3.style.height = demonHeight3 + 'px';
  demon3.style.top = Math.round(Math.random() * spaceH3) - 150 + 'px';
  demon3.style.left = Math.round(Math.random() * spaceW3) - 150 + 'px';
  demon3.style.zIndex = Math.round(Math.random() * 1000);

  i++;
  if (i == 7) { i = 1 };
}

window.onload = apocalypse();
