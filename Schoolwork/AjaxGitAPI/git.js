let sendReq = function (urlVar, onLoadFunction) {
    $.ajax({
        url: `https://api.github.com/search/${urlVar}`,
        method: 'GET'
    }).done(onLoadFunction)
}
let getUsers = function (data) {
    $(main).html('')
    for (let i = 0; i < data.items.length; i++) {
        let someDiv = $('<div>').addClass('user');
        let someImg = $('<img>').attr('src', data.items[i].avatar_url).addClass('profileImg');
        let someParagraph = $('<p>');
        $(someParagraph).text(data.items[i].login);
        $(someDiv).append(someImg);
        $(someDiv).append(someParagraph);
        $(main).append(someDiv);
    }
    console.log(data);
    console.log('helo');
}
let shortCode = function () {
    let inputValue = input.value;
    sendReq(inputValue, getUsers);

}
//     $.ajax({
//         url: `https://api.github.com/search/users?q=${inputValue}`, // 'q=' + input.value samo sto je ovo ES6
//         method: 'GET'
//     }).done(function (data) {
//         $(main).html('')
//         for (let i = 0; i < data.items.length; i++) {

//             let someDiv = $('<div>').addClass('user');
//             let someImg = $('<img>').attr('src', data.items[i].avatar_url).addClass('profileImg');
//             let someParagraph = $('<p>');
//             $(someParagraph).text(data.items[i].login);
//             $(someDiv).append(someImg);
//             $(someDiv).append(someParagraph);
//             $(main).append(someDiv);
//         }



//         console.log(data);
//         console.log('helo');
//     })
// }
let showRepo = function(){
    var profileDiv = $('.user').on('click',);

    function handler2(event){
        console.log(event);

        }
    }

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
    // showRepo();
};

button.addEventListener('click', handler1);
body.addEventListener('keypress', handler1);
