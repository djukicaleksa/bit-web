
// function changeColor() {
//     document.getElementById("second").className = "secondcolor";
// }
// changeColor();

// function trigered() {

//     var selector = document.querySelectorAll("li");
//     for (var i = 0; i < selector.length; i++) {
//         selector[i].className = "setcolor";
//     }
// }
// trigered();



// function third() {
//     var selct = document.getElementsByClassName("third");
//     for (var i = 0; i < selct.length; i++) {
//         selct[i].className = "setthird";

//     }

// }
// third();

// function lista() {
//     var current = document.querySelector(".active");

//     current.className = "";

//     // current.parentElement.parentElement.previousElementSibling.querySelector('ul').firstElementChild.className = "active";
//     var parent = current.parentElement.parentElement;
//     var prev = parent.previousElementSibling.querySelector('ul').firstElementChild.className = "active";

// }
// lista();


// function navigation() {
//     var a = document.querySelector(".rightnow");
//     a.textContent = "sleeping";
//     alert(a.textContent);
// }

// navigation();

// function name(a) {
//     var b = document.querySelector(".rightnow")
//     b.lastElementChild.textContent = a;
// }
// name("whats up");

// var dropdownBuild = function (array) {
//     var createSelect = document.createElement("select");

//     for (var i = 0; i < array.length; i++) {
//         var createOption = document.createElement("option");
//         var textNode = document.createTextNode(array[i]);
//         createOption.appendChild(textNode);
//         createSelect.appendChild(createOption);
//     }

//     var body = document.querySelector('body');
//     body.appendChild(createSelect);
// }
// var array = ['bmw', 'opel', 'fiat', 'audi'];
// dropdownBuild(array);



// var someForm = document.createElement('form')
// var inputMaker = function (name, type, required) {
//     var someLabel = document.createElement('label');
//     var someTextNode = document.createTextNode(name);
//     var someInput = document.createElement('input');
//     someInput.setAttribute("type", type);
//     if (required === 'r') {
//         someInput.setAttribute("required", 'required')
//     }
//     var br = document.createElement('br');
//     someLabel.appendChild(someTextNode);
//     someLabel.appendChild(someInput);
//     someLabel.appendChild(br);
//     someForm.appendChild(someLabel);





// }



// inputMaker('name', 'text', 'r');
// inputMaker('Surname', 'text', 'r');
// inputMaker('E-mail', 'email', 'r');
// inputMaker('Password', 'password', 'r');
// inputMaker('Phone', 'number');
// var button = document.createElement('button');
// var buttonText = document.createTextNode('Submit');
// button.appendChild(buttonText);
// someForm.appendChild(button);
// var body = document.querySelector('body');
// body.appendChild(someForm);


var div = document.createElement('div');
div.className = 'slider';
var array = ["images_1.jpg", "images_2.jpg", "images_3.jpg"];
var images = function (array) {

    for (var i = 0; i < array.length; i++) {
        var img = document.createElement('img');
        img.setAttribute('src', 'img/' + array[i]);
        div.appendChild(img);



    }
    div.firstElementChild.className = 'active';
}
var body = document.querySelector('body');
body.appendChild(div);

images(array);
var timer = function () {
    slider = document.querySelector('.slider')
    slider.firstElementChild.replaceWith(slider.lastElementChild);
}
setInterval(timer, 2000)