

$(document).ready(function () {
    var newimg = [];
    var allext = [];

    var checkedExtentions = $("input[type=checkbox]:checked");
    checkedExtentions.toArray().forEach(function (extObj) {
        var ext = $(extObj).val();
        allext = allext.concat(ext);
    });
    var s = allext.toString();

    $.get('http://localhost:1624/home/ListImage',
        function (response) {
            newimg = response;
            newimg.forEach(function (serverImg) {
                addImg(serverImg);
                if (!s.includes(serverImg.Extension)) {
                    $('#check').append('<div style="float:left; margin-right: 50px;"><label>'
                                       + '<input type="checkbox" checked value="'
                                       + serverImg.Extension + '">' 
                                       + serverImg.Extension
                                       + '</label></div>');
                }
            });
        });
    //$("div.spoiler").hide();
    $("#check").on('click', "input[type=checkbox]", function () {
        $('#Gallery').empty();
        //$("div.spoiler").show();

        var checkedExtentions = $("input[type=checkbox]:checked");
        checkedExtentions.toArray().forEach(function (extObj) {
            var ext = $(extObj).val();
            newimg.forEach(function (serverImg) {
                if (serverImg.Extension == ext) {
                    addImg(serverImg);
                }
            })
        });
        //if (checkedExtentions.length == 0) {
        //    newimg.forEach(function (serverImg) {
        //        addImg(serverImg);
        //    });
        //}
    });

    function addImg(image) {
        if (image.Extension == '.jpg')
            $('#Gallery').append('<div class = "pop-block">'
                + '<div class = "block">'
                + '<button name = "imgSrc" value = "'
                + image.FileUrl
                + '" class = "close">x</button></div><img src="'
                + image.FileUrl + '" class="image" style = "border: 5px solid red;" /></div>');
        else if (image.Extension == '.png')
            $('#Gallery').append('<div class = "pop-block">'
                + '<div class = "block">'
                + '<button name = "imgSrc" value = "'
                + image.FileUrl
                + '" class = "close">x</button></div><img src="'
                + image.FileUrl + '" class="image" style = "border: 5px solid blue;" /></div>');
        else if (image.Extension == '.gif')
            $('#Gallery').append('<div class = "pop-block">'
                + '<div class = "block">'
                + '<button name = "imgSrc" value = "'
                + image.FileUrl
                + '" class = "close">x</button></div><img src="'
                + image.FileUrl + '" class="image" style = "border: 5px solid yellow;" /> </div>');
        else
            $('#Gallery').append('<div class = "pop-block">'
                + '<div class = "block">'
                + '<button name = "imgSrc" value = "'
                + image.FileUrl
                + '" class = "close">x</button></div><img src="'
                + image.FileUrl + '" class="image" /> </div>');

    }

    //function addRamka(image) {
    //    if(image.Extension == '.jpg')
    //        $('.image').append('class = "image-jpg"')
    //    if(image.Extension == '.png')
    //        $('.image').append('class = "image-png"')
    //}
});


