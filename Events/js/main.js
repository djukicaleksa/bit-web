// var changeBackground = function () {
//     var body = document.querySelector('body');
//     body.classList.toggle('background');
// }
// var klasa = function () {
//     var sec = document.querySelector(".buttwo");
//     sec.removeAttribute("onclick");
// }
// var button = document.querySelector('.send');
// button.onclick = function () {
//     var message = document.querySelector('#message');
//     var container = document.querySelector('.container');
//     var p = document.createTextNode(message.value);
//     var sent = document.createElement('p');
//     sent.appendChild(p);
//     container.appendChild(sent);

//     message.value = '';



// }
///////////////////////////////////////////////
function handler1(obj) {
    var player = document.querySelector('.player');
    player.style.left = obj.clientX + 'px';
    player.style.top = obj.clientY + 'px';

}
var body = document.querySelector('body');
body.addEventListener("click", handler1);