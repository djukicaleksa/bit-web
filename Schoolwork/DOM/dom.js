// var selectSecondUl = function () {
//     document.getElementById('secondlist').className = 'secondul';
// }
// selectSecondUl();

// var selectLi = function () {
//     var array = document.getElementsByTagName('li');
//     for (var i = 0; i < array.length; i++) {
//         array[i].className = 'liBgColor';
//     }
// }
// setTimeout(selectLi, 2000);

// var selectThirdList = function () {
//     var array = document.querySelectorAll('#thirdlist li');
//     for (var i = 0; i < array.length; i++) {
//         array[i].className = 'thirdUl';
//     }
// }
// setTimeout(selectThirdList, 3000);

// var selectSiblings = function () {
//     var selector = document.querySelector('.active');
//     selector.className = '';
//     selector.parentElement.parentElement.previousElementSibling.querySelector('ul').firstElementChild.className = 'active';
// }
// selectSiblings();

// var popupText = function () {
//     var savedText = document.getElementById('navigation').firstElementChild.textContent;
//     alert(savedText);
//     return savedText;
// }
// var newText = popupText();
// setTimeout(popupText, 1500);
// var replaceText = function (savedText) {
//     document.getElementById('navigation').lastElementChild.textContent = newText;
// }
// setTimeout(replaceText, 2500);

var dropdownBuild = function (array) {
    var createSelect = document.createElement("select");

    for (var i = 0; i < array.length; i++) {
        var createOption = document.createElement("option");
        var textNode = document.createTextNode(array[i]);
        createOption.appendChild(textNode);
        createSelect.appendChild(createOption);
    }

    var body = document.querySelector('body');
    body.appendChild(createSelect);
}
var array = ['bmw', 'opel', 'fiat', 'audi'];
dropdownBuild(array);


//////////////////////////////////////

var body = document.querySelector('body');
var select = document.createElement('select');





