

export const popularLoad = function (data) {
    console.log(data);
    let $gallery = $('.gallery');
    for (let i = 0; i < 50; i++) {
        let $someDiv = $('<div>').addClass('tvShow');
        let $aHref = $('<a>').attr('href', 'showInfo.html');
        let $someImg = $('<img>').addClass('tvShowImg').attr('src', data[i].image.medium);
        let $somePara = $('<p>').text(data[i].name);

        $someDiv.append($someImg);
        $someDiv.append($somePara);
        $aHref.append($someDiv);
        $gallery.append($aHref);


    }
}

export const searchList = function (data){
     console.log(data);
     console.log('aleksa');
     
     

}