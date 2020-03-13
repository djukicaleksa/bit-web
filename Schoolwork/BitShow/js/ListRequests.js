const listRequests = function (doneHandler) {
    const query = $('input').val();


    $.ajax({
        url: `http://api.tvmaze.com/search/shows?q=${query}`,
        method: 'GET'
    }).done(function (data) {
        let $dropdown = $('ul');
        $dropdown.html('');
        console.log(data);
        for (let i = 0; i < 10; i++) {

            let $someLi = $('<li>');
            
            let $someAHref = $('<a>').attr('href', 'showInfo.html');
            $someLi.text(data[i].show.name);
            $someAHref.append($someLi);
            $dropdown.append($someAHref);


        }


    }).fail(function () {
        console.log('ERROR');

    })
}
export default listRequests;

