var body = document.querySelector('body');
var b = 0;
var c = 0;
var d = 0;
var mario = document.querySelector('.mario');


var move = function (event) {
    if (event.keyCode === 37) {
        var runtime = function () {
            b = b + 5;
            body.style.backgroundPositionX = b + 'px';
            mario.style.backgroundImage = 'sprites/mario_running.gif');
        }
        setInterval(runtime, 50);

    }
    if (event.keyCode === 39) {
        c = c - 5;
        body.style.backgroundPositionX = c + 'px'; ''
        mario.setAttribute('src', 'sprites/mario_running.gif');
    }
    if (event.keyCode === 38) {

        mario.style.bottom = 200 + 'px';
        var jump = function () {
            mario.style.bottom = 0 + 'px';
        }
        setTimeout(jump, 1550);



    }

}
body.addEventListener("keydown", move);
// body.addEventListener('keyup', function () { body.style.backgroundPositionX = 0; })
body.addEventListener('keyup', function () { mario.setAttribute('src', 'sprites/mario.png') })