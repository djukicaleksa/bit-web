$.ajax({
    url: 'https://api.github.com/search/users?q=djukic',
    method: 'GET'
}).done(function (data) {
    console.log(data);
    console.log('helo');


});