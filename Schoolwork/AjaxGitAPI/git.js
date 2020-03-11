let shortCode = function () {
    let inputValue = input.value;
    $.ajax({
        url: `https://api.github.com/search/users?q=${inputValue}`, // 'q=' + input.value samo sto je ovo ES6
        method: 'GET'
    }).done(function (data) {
        $(main).html('')
        for (let i = 0; i < data.items.length; i++) {

            let someDiv = $('<div>').addClass('user');
            let someImg = $('<img>').attr('src', data.items[i].avatar_url);
            let someParagraph = $('<p>');
            $(someParagraph).text(data.items[i].login);
            $(someDiv).append(someImg);
            $(someDiv).append(someParagraph);
            $(main).append(someDiv);
        }



        console.log(data);
        console.log('helo');
    })
}


let input = document.querySelector('input');
let button = document.querySelector('button');
let main = document.querySelector('main');
let body = document.querySelector('body');
function handler1(event) {
    if (event.keyCode) {
        if (event.keyCode === 13) {

            shortCode();
        }
    } else {
        shortCode();
    }
};

button.addEventListener('click', handler1);
body.addEventListener('keypress', handler1);
