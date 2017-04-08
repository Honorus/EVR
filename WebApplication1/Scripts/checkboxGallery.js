

$(document).ready(function () {
    var images = [];
    var allExtension = [];

    var checkedExtensions = $("input[type=checkbox]:checked");
    checkedExtensions.toArray().forEach(function (extensionObject) {
        var extension = $(extensionObject).val();
        allExtension = allExtension.concat(extension);
    });
    //var s = allExtension.toString();

    $.get('http://localhost:1624/home/ListImage',
        function (response) {
            images = response;
            images.forEach(function (image) {
                addImage(image);
                if (!allExtension.includes(image.Extension)) {
                    $('#ImageFilter').append('<div style="float:left; margin-right: 50px;"><label>'
                                       + '<input type="checkbox" checked value="'
                                       + image.Extension + '">'
                                       + image.Extension
                                       + '</label></div>');
                }
            });
        });
    $("#ImageFilter").on('click', "input[type=checkbox]", function () {
        $('#Gallery').empty();

        var checkedExtensions = $("input[type=checkbox]:checked");
        checkedExtensions.toArray().forEach(function (extensionObject) {
            var extension = $(extensionObject).val();
            images.forEach(function (image) {
                if (image.Extension == extension) {
                    addImage(image);
                }
            })
        });
        //if (checkedExtentions.length == 0) {
        //    newimg.forEach(function (serverImg) {
        //        addImg(serverImg);
        //    });
        //}
    });

    function addImage(image) {
        if (image.Extension == '.jpg')
            $('#Gallery').append('<div class = "pop-block">'
                + '<div class = "deleteImage-block">'
                + '<button name = "imageSrc" value = "'
                + image.ImageUrl
                + '" class = "delete-image"></button></div><img src="'
                + image.ImageUrl + '" class="image-preview" style = "border: 5px solid red;" /></div>');
        else if (image.Extension == '.png')
            $('#Gallery').append('<div class = "pop-block">'
                + '<div class = "deleteImage-block">'
                + '<button name = "imageSrc" value = "'
                + image.ImageUrl
                + '" class = "delete-image"></button></div><img src="'
                + image.ImageUrl + '" class="image-preview" style = "border: 5px solid blue;" /></div>');
        else if (image.Extension == '.gif')
            $('#Gallery').append('<div class = "pop-block">'
                + '<div class = "deleteImage-block">'
                + '<button name = "imageSrc" value = "'
                + image.ImageUrl
                + '" class = "delete-image"></button></div><img src="'
                + image.ImageUrl + '" class="image-preview" style = "border: 5px solid yellow;" /> </div>');
        else
            $('#Gallery').append('<div class = "pop-block">'
                + '<div class = "deleteImage-block">'
                + '<button name = "imageSrc" value = "'
                + image.ImageUrl
                + '" class = "delete-image"></button></div><img src="'
                + image.ImageUrl + '" class="image-preview" /> </div>');

    }
});


