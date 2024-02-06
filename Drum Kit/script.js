function playSound(e){
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    if(!audio) return; //stop running if the key press is null 
    audio.currentTime = 0; // restarts the audio when it is click
    //audio.play(); // play the audio whenever the key is click

    //playing animation
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    key.classList.add('playing');
}

function removeTransition(e){
    if(e.propertyName !== 'transform') return; //skip is the key press is not an input
    this.classList.remove('playing');
}

const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', removeTransition))

window.addEventListener('keydown', playSound);
