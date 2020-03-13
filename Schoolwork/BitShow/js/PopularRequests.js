const sendRequest = function (doneHandler) {
    $.ajax({
        url: `http://api.tvmaze.com/shows`,
        method: "GET"

    }).done(doneHandler).fail(function () {
        console.log(`error`);

    })
};
export default sendRequest;

