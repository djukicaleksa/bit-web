

// console.log(input);

var body = document.querySelector("body");
var button = document.querySelector('.request');
function handler1() {
    var input = document.querySelector('input').value;
    console.log(input);

    var xmlhttp = new XMLHttpRequest();
    xmlhttp.open("GET", "http://www.geoplugin.net/xml.gp?ip=" + input);
    xmlhttp.send();

    xmlhttp.onload = function () {
        var xmlDoc = xmlhttp.responseXML;
        var from = xmlDoc.querySelector("geoplugin_countryName").textContent;
        var money = xmlDoc.querySelector("geoplugin_currencySymbol_UTF8").textContent;
        var p = document.createElement("p");
        var genga = document.createElement("h1")
        p.textContent = 'IP from : ' + from;
        genga.textContent = 'Zvanicna valuta je : ' + money;
        body.appendChild(p);
        body.appendChild(genga);

    }
}

button.addEventListener('click', handler1);
var gallery = document.querySelector('.gallery');
gallery.style.display = 'flex';
gallery.style.flexWrap = 'wrap';


addimg = document.querySelector('.addimg');
function handler2() {
    var dogapi = new XMLHttpRequest();
    dogapi.open('GET', 'https://dog.ceo/api/breeds/image/random');
    dogapi.send();

    dogapi.onload = function () {
        var dogjson = dogapi.responseText;
        dogjson = JSON.parse(dogjson);
        var img = document.createElement('img');
        img.setAttribute('src', dogjson.message);
        var dogname = dogjson.message.slice(30);
        var res = 'Breed : ';


        for (var i = 0; i < 30; i++) {
            if (dogname[i] !== '/') {
                if (dogname[i] === '-') {
                    res += '\t';

                } else { res += dogname[i]; }
            } else {
                break;
            }

        }

        var wrapper = document.createElement('div');
        wrapper.style.width = '30%';
        wrapper.style.boxSizing = 'box-content';


        var textelem = document.createElement('p');
        textelem.style.width = '100%'
        textelem.textContent = res;

        img.style.width = '100%';
        wrapper.style.marginRight = '20px';
        wrapper.appendChild(img);
        wrapper.append(textelem);
        gallery.appendChild(wrapper);

    }
}
addimg.addEventListener('click', handler2);
var gallery2 = document.querySelector('.gallery2');
var select = document.querySelector('select');
function handler3() {





    //function loop() {
    var dogBreed = new XMLHttpRequest();
    var breedName = document.querySelector('#breed').value;
    dogBreed.open('GET', 'https://dog.ceo/api/breed/' + breedName + '/images/random');
    dogBreed.send();
    dogBreed.onload = function () {
        gallery2.innerHTML = '';
        var apiMethod = dogBreed.responseText;
        apiMethod = JSON.parse(apiMethod);
        console.log(apiMethod);



        var createImg = document.createElement('img');
        createImg.setAttribute('src', apiMethod.message);
        createImg.style.width = '50%';
        gallery2.appendChild(createImg);
    }
    //}

}
setInterval(handler3, 3000);

//select.addEventListener('change', handler3);