const keys = Array.from(document.querySelectorAll('.key'));
const keyCode = {
    A: 65,
  S: 83,
  D: 68,
  F: 70,
  G: 71,
  H: 72,
  J: 74,
  K: 75,
  L: 76
};


document.addEventListener('keyup', ()=> {
    keys.forEach((key)=> {
        key.classList.remove('playing');
    })
})

document.addEventListener('keydown', playSound);

function playSound(e) {
    const code = e.keyCode || keyCode[e.target.innerText];
    const audio = document.querySelector(`audio[data-key="${code}"]`);

    const key = document.querySelector(`div[data-key="${code}"]`);

    if(!audio) return

    key.classList.add('playing');
    audio.currentTime = 0;
    audio.play();
}

keys.forEach((key) => key.addEventListener('transitionend', removeTransition));

function removeTransition(e) {
  if (e.propertyName !== 'transform') return;
  e.target.classList.remove('playing');
}

keys.forEach((key) =>
  key.addEventListener('click', (e) => {
    playSound(e);
  })
);
