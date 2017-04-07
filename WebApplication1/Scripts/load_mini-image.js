$(document).ready(function () {
    var imgInput = $('#file');
    var imgCont = $('#imageContainer');
    $('#message').hide();
    //$('#filename').hide();

    function displayImg(file) {
        file = document.querySelector('input[type=file]').files[0];
        //$('<div id = "imageName"></div>').text(file.name).appendTo(imgCont);
        $('#filename').val(file.name);
        var img = $('<img/>').appendTo(imgCont);
        //$('<div/>').addClass('progress').attr('rel', '0').text('0%').appendTo(imgCont);
        //imgCont.get(0).file = file;
        
        var reader = new FileReader();
        reader.onload = (function (aImg) {
            return function (e) {
                aImg.attr('src', e.target.result);
                aImg.attr('width', 150);
            };
        })(img);
        reader.readAsDataURL(file);
    }

    imgInput.bind({
        change: function () {
            displayImg(this);
            $('#message').show();
            //$('#filename').show();
        }
    });

})