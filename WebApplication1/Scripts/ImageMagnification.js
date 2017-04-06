

$(document).ready(function () {
    $("#Gallery").on('click', ".image", function () {
        document.getElementById('bd').style.overflow = 'hidden';
        var image = $(this);
        var imagePath = image.attr('src');
        $("body").append('<div class = "new-window"><div class = "new-window_btn"></div></div>');
        $("body").append('<div class = "new-window_popup4IK">' +
                         //'<div class = "new-window_btn"></div>' +
                         '<img src = "'
                         + imagePath
                         + '" class = "fullscreen-image" /></div>');
        $(".new-window").fadeIn(500);
        //$(".fullscreen-image").click(function () {
        $(".new-window").click(function () {
            $(".new-window").fadeOut(500);
            $(".new-window").remove();
            $(".new-window_popup4IK").remove();
            document.getElementById('bd').style.overflow = 'visible';
        });
    });
});