

$(document).ready(function () {
    var newimg = [];
    $.get('http://localhost:1624/home/ListImage',
        function (response) {
            newimg = response;
        });

    $("div.spoiler").hide();
    $("input[type=checkbox]").click(function () {
        $('#Gallery').empty();
        $("div.spoiler").show();

        var checkedExtentions = $("input[type=checkbox]:checked");
        checkedExtentions.toArray().forEach(function (extObj) {
            var ext = $(extObj).val();
            newimg.forEach(function (serverImg) {
                if (serverImg.Extension == ext) {
                    addImg(serverImg);
                    
                }
            })
        });
    });

    function addImg(image) {
        $('#Gallery').append('<div class="spoiler"><p class="title"> ' + image.Filename + ' </p> <br><img class="big-desc" src="'
                + image.FileUrl + '" style="float:left"></div>');
    }
});


