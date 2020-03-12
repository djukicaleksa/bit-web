var body = document.querySelector('body');
var mario = document.querySelector('.mario');
var interval;
var x = 0;
var y = 0;
function startMoving() {
    
    mario.classList.add('moving');
    x += 5;
    y -= 5;
    interval = setInterval(moveBackground, 100);
}

body.addEventListener("keydown", startMoving);
function stopMoving() {
    mario.classList.remove('moving');
    clearInterval(interval);
}


body.addEventListener('keyup', stopMoving);
function moveBackground() {
    if (event.keyCode === 39) {

        body.style.backgroundPositionX = x + 'px';
    } else if (event.keyCode === 37) {
        body.style.backgroundPositionX = y + 'px';
    }
}
function moveUp() {

}

