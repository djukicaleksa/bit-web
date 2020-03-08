$(function () {
    // $("#msgid").text("This is Hello World by JQuery").addClass("bottomBorder");
    // $("li:eq(0)").addClass("bottomBorder");
    // $("li").addClass("uppCase");
    // $("li.active").addClass("elemColor");
    // $("li:eq(1)").addClass("bcgColor");
    var gallery = $('<div>');
    $(gallery).addClass('gallery');
    $('body').append(gallery);


    var imgUrls = ['images/boat.png', 'images/brazil.png', 'images/spain.jpg', 'images/walls.jpg'];
    for (var i = 0; i < imgUrls.length; i++) {
        var image = $('<img>');
        $(image).attr('src', imgUrls[i]);
        $(gallery).append(image);
    }
    $('.gallery img').each(function (index, element) {
        var rand = Math.floor(Math.random() * 1200);
        $(this).width(rand + 'px');

    })
    $('.gallery img').each(function (index, element) {
        if ((parseInt($(this).width())) < 200) {
            $(this).addClass('border')
        } else {
            return false;
        }
    })

});