

$(document).ready(function () {
    $("#Gallery").on('click', ".image", function () {
        //document.getElementById('body-content-Gallery').style.overflow = 'hidden';
        $('#body-content-Gallery').css('overflow', 'hidden');
        var image = $(this);
        var imagePath = image.attr('src');
        $("body").append('<div class = "new-window"><div class = "new-window_buttonClose"></div></div>');
        $("body").append('<div class = "new-window_popup4IK">'
                         + '<img src = "'
                         + imagePath
                         + '" class = "fullscreen-image" /></div>');
        $(".new-window").fadeIn(500);
        //$(".fullscreen-image").click(function () {
        $(".new-window").click(function () {
            $(".new-window").fadeOut(500);
            $(".new-window").remove();
            $(".new-window_popup4IK").remove();
            //document.getElementById('body-content-Gallery').style.overflow = 'visible';
            $('#body-content-Gallery').css('overflow', 'visible');
        });
    });
});